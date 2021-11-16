import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { Routes } from 'react-router-dom'; //v6
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomePage from "./home/home_page";
import NavBarContainer from './navbar/navbar_container'
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container"
import MessagesContainer from "./messages/messages_container"
const App = () => (
    <div>

        <Route to="/" component={NavBarContainer} />
        <Switch> 
            <ProtectedRoute exact path="/" component={HomePage} />
            <AuthRoute path="/login" component={LoginContainer} />
            <AuthRoute path="/signup" component={SignupContainer}/>
            <ProtectedRoute path="/messages" component={MessagesContainer} />
        </Switch>
    </div>
)



export default App;