import React from 'react';
import { Switch } from 'react-router-dom';
// import { Routes } from 'react-router-dom'; //v6
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomePage from "./home/home_page"


const App = () => (
    <div>

        {/* Switch is changed to Routes in V6 react-router-dom */}
        <Switch> 
            <AuthRoute exact path="/" component={HomePage} />
        </Switch>
    </div>
)



export default App;