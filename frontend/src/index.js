import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from "jwt-decode";
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import axios from "axios";




document.addEventListener('DOMContentLoaded', ()=>{
  let store = configureStore();
  console.log(store)
  window.store = store;

  if(localStorage.jwtToken){
    console.log("running")
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken)

    const preloadedState = {
      session: {
        isAuthenticated: true,
        user: decodedUser
      }
    }
    store = configureStore(preloadedState)

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }


  const root = document.getElementById('root')


 ReactDOM.render(<Root store={store} />, root)


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   root
// );
const ax = axios;
window.axios = ax;


})

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
