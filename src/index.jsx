import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { legacy_createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './components/app/app';
import { rootReducer } from './services/reducers/index';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enchancer = composeEnhancers(applyMiddleware(thunk));
const store = legacy_createStore(rootReducer, enchancer);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);