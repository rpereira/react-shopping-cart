import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'

import App from './App';
import './index.css';

import rootReducer from './reducers';

const middleware = [];
if (process.env.NODE_ENV === 'production') {
  const createLogger = require('redux-logger').createLogger;
  middleware.push(createLogger());
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
