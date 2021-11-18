import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from './session_form';
import { Link } from "react-router-dom";
import { openModal, closeModal } from "../../actions/modal_actions";

const mSTP = (state ={}, ownProps) => ({
    errors: state.errors.session,
    navLink: <Link to={'/signup'}>Sign up</Link>,
    formType: 'Login',
    demoUser: {
        email: 'demo@demo.com',
        password: 'demodemo'
    }
})

const mDTP = (dispatch, ownProps) => ({
    login: (user) => dispatch(login(user)),
    action: (formUser) => dispatch(login(formUser)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP,mDTP)(SessionForm);