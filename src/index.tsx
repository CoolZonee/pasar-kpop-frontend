import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(reducers, compose(applyMiddleware(thunk)))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
