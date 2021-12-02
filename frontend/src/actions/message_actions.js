import * as APIutil from "../util/messages_api_util";

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_USER_MESSAGES = "RECEIVE_USER_MESSAGES";
export const RECEIVE_EVENT_MESSAGES = "RECEIVE_EVENT_MESSAGES";
export const RECEIVE_NEW_MESSAGE = "RECEIVE_NEW_MESSAGE";


const receiveMessages = (messages) => ({
    type: RECEIVE_MESSAGES,
    messages
});
const receiveUserMessages = (messages) => ({
    type: RECEIVE_USER_MESSAGES,
    messages
});
const receiveEventMessages = (messages) => ({
    type: RECEIVE_EVENT_MESSAGES,
    messages
});
const receiveNewMessage = (message) => ({
    type: RECEIVE_NEW_MESSAGE,
    message
});



export const fetchMessages = () => dispatch => APIutil.getMessages()
    .then( (messages) => dispatch(receiveMessages(messages)))
    .catch( (error) => console.log(error))

export const fetchUserMessages = (userId) => dispatch => APIutil.getUserMessages(userId)
    .then( (messages) => dispatch(receiveUserMessages(messages)))
    .catch( (error) => console.log(error))

export const fetchEventMessages = (eventId) => dispatch => APIutil.getEventMessages(eventId)
    .then( (messages) => dispatch(receiveEventMessages(messages)))
    .catch( (error) => console.log(error))

export const createMessage = (message) => dispatch => APIutil.writeMessage(message)
    .then( (message) => dispatch(receiveNewMessage(message)))
    .catch( (error) => console.log(error))
