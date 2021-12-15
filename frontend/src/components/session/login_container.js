import React from "react";
import { connect } from "react-redux";
import { login, resetErrors } from "../../actions/session_actions";
import SessionForm from './session_form';
import { Link } from "react-router-dom";
import { openModal, closeModal } from "../../actions/modal_actions";
import {fetchAllFriends} from "../../actions/friend_actions"

const mSTP = (state ={}, ownProps) => {
    const currentUser = (state.session.user ? state.session.user.id : state.session.user)
    
    return{
    errors: state.errors.session,
    navLink: <Link to={'/signup'}>Sign up</Link>,
    formType: 'Login',
    demoUser: {
        email: 'demo@demo.com',
        password: 'demodemo'
    },
    currentUser: currentUser
}}

const mDTP = (dispatch, ownProps) => ({
    login: (user) => dispatch(login(user)),
    action: (formUser) => dispatch(login(formUser)),
    fetchAllFriends: (userId) => dispatch(fetchAllFriends(userId)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchAllFriends: (userId) => dispatch(fetchAllFriends(userId)),
    resetErrors: () => dispatch(resetErrors())
})

export default connect(mSTP,mDTP)(SessionForm);