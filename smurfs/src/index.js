import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';


import thunk from 'redux-thunk';

import logger from 'redux-logger';

import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';

import reducer from  './reducers';

import {BrowserRouter} from 'react-router-dom'


const store = createStore(
  reducer, 
  applyMiddleware(thunk,logger)
);



ReactDOM.render(
  <Provider store={store}>

  <BrowserRouter>
  
    <App /></BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
