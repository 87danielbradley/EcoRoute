import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from './session_form';
import { Link } from "react-router-dom";

const mSTP = (state ={}, ownProps) => ({
    errors: state.errors.session,
    navLink: <Link to={'/signup'}>Sign up</Link>,
    formType: 'Log in'

})

const mDTP = (dispatch, ownProps) => ({
    login: (user) => dispatch(login(user)),
    action: (formUser) => dispatch(login(formUser))
})

export default connect(mSTP,mDTP)(SessionForm);