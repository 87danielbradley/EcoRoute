import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import axios from "axios";
import configureStore from '../store/store';
import { setAuthToken } from '../util/session_api_util';
import jwt_decode from "jwt-decode";
import { logout } from '../actions/session_actions';




document.addEventListener('DOMContentLoaded', ()=>{
  let store = configureStore();

  if(localStorage.jwtToken){
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken)

    const preloadedState = {
      session: {
        isAuthenticated: true,
        user: decoded
      }
    }
    store = configureStore(preloadedState)

    const currentTime = Date.now() /1000;

    if (decoded.exp < currentTime) {
      store.dispatch(logout())
    }
  } else {
    store = configureStore();
  }




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

window.axios = axios;


})

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
