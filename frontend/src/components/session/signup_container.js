import React from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from './session_form';
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mSTP = (state ={}, ownProps) => {
    
    return{
    loggedIn: state.session.isAuthenticated,
    errors: state.errors.session,
    navLink: <Link to={'/login'}>Log in</Link>,
    formType: 'Sign up',
    demoUser: {
        email: 'demo@demo.com',
        password: 'demodemo'
    }
    
}}

const mDTP = (dispatch, ownProps) => ({
    login: (user) => dispatch(login(user)),
    action: (newFormUser) => dispatch(signup(newFormUser)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchAllFriends: (userId) => console.log('you have no friends :(')
})

export default connect(mSTP,mDTP)(SessionForm);