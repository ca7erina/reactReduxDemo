const gulp = require('gulp');
const gutil = require('gulp-util');
const del = require('del');
const eslint = require('gulp-eslint');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const browserSync = require('browser-sync').create();
const webpackConfigFile = require('./webpack.config.js');
const WebpackDevServer = require('webpack-dev-server');
const jest = require('gulp-jest').default;
const open = require('open');
const SRC_DIR = 'src/**/*';
const DIST_DIR = 'dist/**/*';

/*Clean dist folder */
gulp.task('clean:dist', () => del([DIST_DIR]));

/* Eslint */
gulp.task('eslint', () =>
  gulp
    .src(['**/*.js', '!node_modules/**', '**/*.jsx'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError()));

/* Development build to dist */
gulp.task('webpack:build-dev', (cb) => {
  webpack(Object.create(webpackConfigFile)).run((err, stats) => {
    if (err) throw new gutil.PluginError('webpack:build-dev', err);
    gutil.log(
      '[webpack:build-dev]',
      stats.toString({
        colors: true,
      }),
    );
  });
  cb();
});

/* Development server use webpack*/
gulp.task('webpack:dev-server', (cb) => {
  const webpackDevServerConfig = Object.create(webpackConfigFile);
  webpackDevServerConfig.devtool = "eval";

  new WebpackDevServer(webpack(webpackDevServerConfig), {
    publicPath: '/',
    contentBase: DIST_DIR,
    hot: true,
    inline:true,
    open: true,
    port:8181,
    stats: {
      colors: true,
    },

  }).listen(8181, 'localhost', (err) => {
    if (err) throw new gutil.PluginError('webpack:dev-server', err);
    gutil.log('[webpack-dev-server]', 'http://localhost:8181/');
  });
  open("http://localhost:8181");
  cb();
});

/* Jest test */
gulp.task('test',  (cb) => {
  gulp.src('./').pipe(jest({
   "preprocessorIgnorePatterns": [
     "<rootDir>/dist/", 
     "<rootDir>/node_modules/"
   ],
   "automock": false,
   "collectCoverage": true
 })).on('error',  process.exit.bind(process, 1));
 cb();
});

/* Development server use browsersync*/
gulp.task('browsersync:dev-server', (cb) =>{
  gulp.watch("src/**/*").on('change', browserSync.reload);
  const webpackDevServerConfig = Object.create(webpackConfigFile);
  let bundler = webpack(webpackDevServerConfig);
  browserSync.init({
    server: {
        baseDir: SRC_DIR,

        middleware: [
            webpackDevMiddleware(bundler, {
                publicPath: webpackDevServerConfig.output.publicPath,
                stats: { colors: true }
            }),
            webpackHotMiddleware(bundler)
        ]
    }
});
cb();
});    

/**
 * Gulp end tasks.
 */
gulp.task('dev',  gulp.series('clean:dist', 'eslint', 'test', 'browsersync:dev-server'));
