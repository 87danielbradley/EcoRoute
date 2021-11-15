import React from "react";
import { connect } from "react-redux";
import { fetchMessages } from "../../actions/message_actions";
import { logout } from "../../actions/session_actions";
import MessagesView from "./messages_view";


const mSTP = (state ={}, ownProps) => ({
    loggedIn: state.session.isAuthenticated,
    messages: Object.values(state.messages.all)
})

const mDTP = (dispatch, ownProps) => ({
    fetchMessages: () => dispatch(fetchMessages())
})

export default connect(mSTP,mDTP)(MessagesView);