import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './index.css';
import 'popper.js/dist/popper.js'
import reportWebVitals from './reportWebVitals';
import { Routes } from './routes/Routes';
ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
