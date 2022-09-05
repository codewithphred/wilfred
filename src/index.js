import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import popper from 'popper.js';
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './app';
// import App from "./components/App"

  
// ReactDOM.render( 
//   <App/>, document.getElementById ('root') 
// );

// import './index.css';

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();
