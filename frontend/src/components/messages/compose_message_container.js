import React from "react";
import { connect } from "react-redux";
import { createMessage} from "../../actions/message_actions";
import ComposeMessagesView from "./messages_view";



const mSTP = (state ={}, ownProps) => ({
    loggedIn: state.session.isAuthenticated
})

const mDTP = (dispatch, ownProps) => ({
    createMessage: (message) => dispatch(createMessage(message))
})

export default connect(mSTP,mDTP)(ComposeMessagesView);