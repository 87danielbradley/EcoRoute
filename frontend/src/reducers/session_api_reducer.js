const { RECIEVE_USER_LOGOUT, RECIEVE_USER_SIGN_IN,RECEIVE_CURRENT_USER } = require("../actions/session_actions");

const intitalState = {
    isAuthenticated: false,
    user: {}
};

const sessionApiReducer = (state = intitalState, action) => {
    Object.freeze(state);
    console.log("TIMSESSION", action)
    switch(action.type){
        case RECIEVE_USER_LOGOUT: 
            return{
                isAuthenticated: false,
                user: undefined
            }
        case RECIEVE_USER_SIGN_IN:
            return{
                ...state,
                isSignedIn: true
            }
        case RECEIVE_CURRENT_USER:
            return{
                ...state,
                isAuthenticated: !!action.user,
                user: action.user
            }
        default:
            return state;
    }



}



export default sessionApiReducer;