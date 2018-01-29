# Run project in dev mode
----------
```sh
/demo$ npm i
/demo$ npm run dev
```
# Run test
----------
```sh
/demo$ npm test
```

# Set Up History
----------
### 1. Install [Nodejs](https://nodejs.org/en/download/) 
### 2. Install [Visual Studio Code](https://code.visualstudio.com/)
### 3. Create an react app
```sh
$ npm install -g create-react-app
$ create-react-app demo
```
### 4. Change directory to "demo" to install packages:
```sh
/demo$ npm install --save react react-dom react-scripts
/demo$ npm install --save react-redux
/demo$ npm install --save redux redux-thunk redux-logger
/demo$ npm install --save react-router react-router-dom 
/demo$ npm install --save node-uuid
/demo$ npm install --save lodash

/demo$ npm i -D jest
/demo$ npm i -D enzyme enzyme-adapter-react-16
/demo$ npm i -D redux-mock-store
```
### 5. Install [Eslint](https://www.npmjs.com/package/eslint)
```sh
/demo$ npm install eslint --save-dev
```
Undner project do "eslint --init", chose the airbnb style: popular-guide -> airbnb -> y -> json
```sh
/demo$ ./node_modules/.bin/eslint --init 
/demo$ ./node_modules/.bin/eslint xx.js
/demo$ ./node_modules/.bin/eslint xx.js --fix 
```
### 6. Install [Eslint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for Visual Studio Code

### 7. Install [flow](https://flow.org/en/docs/install/)
```sh
/demo$ npm i -D babel-cli babel-preset-flow
/demo$ npm i -D flow-bin
/demo$ npm run flow
/demo$ npm run flow init
```

### 8. Install [Flow plugin](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode) for Visual Studio Code
Update VSCode settings for Flow:
```sh
"flow.useNPMPackagedFlow": true,
"flow.pathToFlow": "${workspaceRoot}/node_modules/.bin/flow"
"javascript.validate.enable": false
```

### 9. Install [Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for Visual Studio Code
Auto-format code in VScode based on esLint rules.
```sh
/demo$ npm install prettier-eslint --save-dev
```
VSCode settings:
```sh
"editor.formatOnSave": true,
"javascript.format.enable": false,
"prettier.eslintIntegration": true
```

### 10. install and config [Webpack](https://webpack.js.org/guides/installation/)
```sh
/demo$ sudo npm install --global webpack
/demo$ npm i -D babel-core babel-loader babel-preset-env babel-preset-react
/demo$ npm i -D babel-preset-stage-2
/demo$ npm i -D style-loader css-loader
/demo$ npm i -D html-webpack-plugin html-loader 
/demo$ npm i -D file-loader
/demo$ npm i -D eslint-loader
/demo$ npm i -D flowtype-loader
/demo$ npm i -D react-hot-loader
/demo$ npm i -D webpack-dev-server
```
Useage: 
```sh
/demo$: node_modules/.bin/webpack
/demo$: node_modules/.bin/webpack-dev-server
```

There are bundle.js, index.html, etc. generated in the dist folder.

### 10. install and config [Gulp](https://gulpjs.com/)

```sh
/demo$ sudo npm install --global gulp-cli 
/demo$ npm i -D gulp@next del gulp-util
/demo$ npm i -D gulp-eslint
/demo$ npm i -D gulp-connect
```
config gulpfile.js and then use command:

```sh
/demo$: gulp dev
```

### 11. Install plugins to your browser
https://github.com/facebook/react-devtools/blob/master/README.md#the-react-tab-doesnt-show-up 


### 12. Install and config Jest

```sh
/demo$ npm i -D jest
/demo$ node_modules/.bin/jest
```
configure ".babelrc"

#
# Notes
----------
* "Definition for rule 'jsx-a11y/href-no-hash' was not found"
eslint-plugin-jsx-a11y should be v5 instead of the latest (v6)
```sh
/demo$ npm i -D eslint-plugin-import eslint-plugin-react eslint-plugin-flowtype eslint-plugin-jsx-a11y@5
```
* "error MSB3428: Could not load the Visual C++ component "VCBuild.exe""
```sh
# as admin
/demo$ npm install --global --production windows-build-tools
```

* ENOSPC error: add fs.inotify.max_user_watches=524288 to 99-sysctl.conf.
```sh
$ sudo vi /etc/sysctl.d/99-sysctl.conf
$ sudo sysctl --system
```
