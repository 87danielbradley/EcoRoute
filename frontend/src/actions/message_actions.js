import * as APIutil from "../util/messages_api_util";
import jwt_decode from "jwt-decode"

export const RECIEVE_MESSAGES = "RECIEVE_MESSAGES";
export const RECIEVE_USER_MESSAGES = "RECIEVE_USER_MESSAGES";
export const RECIEVE_NEW_MESSAGE = "RECIEVE_NEW_MESSAGE";


const recieveMessages = (messages) => ({
    type: RECIEVE_MESSAGES,
    messages
});
const recieveUserMessages = (messages) => ({
    type: RECIEVE_USER_MESSAGES,
    messages
});
const recieveNewMessage = (message) => ({
    type: RECIEVE_NEW_MESSAGE,
    message
});



export const fetchMessages = () => dispatch => APIutil.getMessages()
    .then( (messages) => dispatch(recieveMessages(messages)))
    .catch( (error) => console.log(error))

export const fetchUserMessages = (userId) => dispatch => APIutil.getUserMessages(userId)
    .then( (messages) => dispatch(recieveUserMessages(messages)))
    .catch( (error) => console.log(error))

export const createMessage = (message) => dispatch => APIutil.writeMessage(message)
    .then( (message) => dispatch(recieveNewMessage(message)))
    .catch( (error) => console.log(error))
