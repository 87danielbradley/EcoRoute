import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { Routes } from 'react-router-dom'; //v6
import '../App.css';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ModalContainer from './modal/modal_container';
import HomePageContainer from "./home/home_page_container";
import NavBarContainer from './navbar/navbar_container'
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container"
import MessagesContainer from "./messages/messages_container"
import EditEventContainer from '../components/home/edit_event_from_container'
const App = () => (
    <div>
        <ModalContainer/>
        <Route to="/" component={HomePageContainer} />
        <Switch> 
            {/* <ProtectedRoute exact path="/" component={HomePage} /> */}
            <AuthRoute path="/login" component={LoginContainer} />
            <AuthRoute path="/signup" component={SignupContainer}/>
            <ProtectedRoute path="/messages" component={MessagesContainer} />
            {/* change below to protected route */}
            <Route path="/events/:eventId" component={EditEventContainer} />
        </Switch>
    </div>
)



export default App;