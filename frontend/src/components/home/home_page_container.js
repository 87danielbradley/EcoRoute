import React from "react";
import { connect } from "react-redux";
import { logout, login, signup } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import HomePage from "./home_page_view";
import { fetchAllFriends } from "../../actions/friend_actions";

const mSTP = (state = {}, ownProps) => ({
    loggedIn: state.session.isAuthenticated,
    userId: state.session.user.id,
    allState: state
})

const mDTP = (dispatch, ownProps) => ({
    logout: () => dispatch(logout()),
    login: (formUser) => dispatch(login(formUser)),
    signup: (formUser) => dispatch(signup(formUser)),
    openModal: (modal) => dispatch(openModal(modal)),
    fetchAllFriends: (userId) => dispatch(fetchAllFriends(userId))

})

export default connect(mSTP, mDTP)(HomePage);