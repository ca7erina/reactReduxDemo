import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './style/main.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import RouterExample from './routes';

const store = configureStore();

/* eslint-disable react/jsx-filename-extension */
render(
  <Provider store={store}>
    <RouterExample />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
