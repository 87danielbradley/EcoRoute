import * as APIutil from "../util/session_api_util";
import jwt_decode from "jwt-decode"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECIEVE_USER_LOGOUT = "RECIEVE_USER_LOGOUT";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
// export const RESET_SESSION_ERRORS = "RESET_SESSION_ERRORS";
export const RECIEVE_USER_SIGN_IN = "RECIEVE_USER_SIGN_IN";


const recieveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

// const recieveUserSignIn = () => ({
//     type: RECIEVE_USER_SIGN_IN
// });

const logoutCurrentUser = () => ({
    type: RECIEVE_USER_LOGOUT
});
const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const signup = (formUser) => dispatch => APIutil.signup(formUser)
    .then(() => dispatch(recieveCurrentUser(formUser)),
    (error) => dispatch(receiveSessionErrors(error.response.data)))
    // .catch(error => dispatch(receiveSessionErrors(error.response.data)))


export const login = (formUser) => dispatch => APIutil.login(formUser)
    .then( response => {
        const { token } = response.data;
        localStorage.setItem("jwtToken", token);
        APIutil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(recieveCurrentUser(decoded))
    })
    .catch(error => {
        dispatch(receiveSessionErrors(error.response.data));
    })
export const logout = () => dispatch => {
    localStorage.removeItem("jwtToken");
    APIutil.setAuthToken(false);
    dispatch(logoutCurrentUser())
}

// export const logout = (formUser) => dispatch => APIutil.signup(formUser)
