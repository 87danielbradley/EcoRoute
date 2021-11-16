import React from 'react';
import { connect } from 'react-redux';
// import { Route, withRouter } from 'react-router-dom';
// import { withRouter } from "react-router";
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/" />
        )
    )} />
);

const Protected = ({ component: Component, loggedIn, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            loggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
                // console.log('Redirect is not supported.  Need to fix')
            )
        }
    />
);

const mSTP = (state) => (
    {loggedIn: state.session.isAuthenticated}
);

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));