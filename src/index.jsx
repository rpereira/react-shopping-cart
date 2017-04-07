import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import './index.css';

import rootReducer from './reducers';
import { getAllProducts } from './actions/products';

const middleware = [thunk];
if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line global-require
  const createLogger = require('redux-logger').createLogger;
  middleware.push(createLogger());
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware),
);

store.dispatch(getAllProducts());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
