import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DevTools from './DevTools';

import './index.css';

import { Provider } from 'react-redux';
import Store from './store';

const StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);
