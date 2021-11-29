import React from "react";
import { connect } from "react-redux";
import { logout, login, signup } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import NavBar from './navbar_view';

const mSTP = (state ={}, ownProps) => ({
    loggedIn: state.session.isAuthenticated
})

const mDTP = (dispatch, ownProps) => ({
    logout: () => dispatch(logout()),
    login: (formUser) => dispatch(login(formUser)),
    signup: (formUser) => dispatch(signup(formUser)),
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mSTP,mDTP)(NavBar);