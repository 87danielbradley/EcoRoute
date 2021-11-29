import React from "react";
import { connect } from "react-redux";
import { fetchMessages, createMessage, fetchEventMessages } from "../../actions/message_actions";
import { logout } from "../../actions/session_actions";
import MessagesView from "./messages_view";


const mSTP = (state ={}, ownProps) => ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user,
    messages: Object.values(state.messages.all),
    newMessage: state.messages.new

})

const mDTP = (dispatch, ownProps) => ({
    fetchMessages: () => dispatch(fetchMessages()),
    createMessage: (message) => dispatch(createMessage(message)),
    fetchEventMessages: (eventId) => dispatch(fetchEventMessages(eventId))
})

export default connect(mSTP,mDTP)(MessagesView);