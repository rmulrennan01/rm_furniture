import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Router

import { BrowserRouter } from "react-router-dom";


//INSTALL DEPENDENCIES 
//npm install react
//npm install three @react-three/fiber
//npm install @react-three/drei
//npm install @material-ui/core
//npm install @material-ui/icons
//npm install react-router-dom@6
//npm install react-material-ui-carousel

//npm install swiper OR npm i swiper





//RUN THE APP
//npm start

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

ReactDOM.render(
  <BrowserRouter>
    <App /> 
  </BrowserRouter>,
  document.getElementById('root') 
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
