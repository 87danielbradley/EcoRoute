import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import NavBar from './navbar_view';

const mSTP = (state ={}, ownProps) => ({
    loggedIn: state.session.isAuthenticated
})

const mDTP = (dispatch, ownProps) => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP,mDTP)(NavBar);