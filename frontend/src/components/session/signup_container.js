import React from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from './session_form';
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";

const mSTP = (state ={}, ownProps) => ({
    loggedIn: state.session.isAuthenticated,
    errors: state.errors.session,
    navLink: <Link to={'/login'}>Log in</Link>,
    formType: 'Sign up'
})

const mDTP = (dispatch, ownProps) => ({
    login: (user) => dispatch(login(user)),
    action: (newFormUser) => dispatch(signup(newFormUser))
})

export default connect(mSTP,mDTP)(SessionForm);