import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from './session_form';
import { Link } from "react-router-dom";
import { openModal, closeModal } from "../../actions/modal_actions";
import {fetchAllFriends} from "../../actions/friend_actions"

const mSTP = (state ={}, ownProps) => {
    const currentUser = (state.session.user ? state.session.user.id : state.session.user)
    debugger
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
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchAllFriends: (userId) => dispatch(fetchAllFriends(userId))
})

export default connect(mSTP,mDTP)(SessionForm);