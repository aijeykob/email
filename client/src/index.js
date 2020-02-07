import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from './App';
import { Provider } from "react-redux";
import { store } from "./storeConfig";
import { BrowserRouter, Route } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route path="/" render={() => <App />} />
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root'));