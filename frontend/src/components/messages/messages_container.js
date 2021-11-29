import React from "react";
import { connect } from "react-redux";
import { fetchMessages, createMessage, fetchEventMessages } from "../../actions/message_actions";
import { logout } from "../../actions/session_actions";
import MessagesView from "./messages_view";


const mSTP = (state ={}, ownProps) => {
    // debugger
    
    return ({loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user,
    messages: Object.values(state.messages.all),
    newMessage: state.messages.new,
    eventId: ownProps.eventId
})
}

const mDTP = (dispatch, ownProps) => ({
    fetchMessages: () => dispatch(fetchMessages()),
    createMessage: (message) => dispatch(createMessage(message)),
    fetchEventMessages: (eventId) => dispatch(fetchEventMessages(eventId))
})

export default connect(mSTP,mDTP)(MessagesView);