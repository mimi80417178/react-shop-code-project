import React from 'react';
import ReactDOM from 'react-dom';
import './shop.css';
import Shop from "./Shop";
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from "./context";


ReactDOM.render(
  <ProductProvider>
    <Router>
      <Shop />
    </Router>
  </ProductProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

