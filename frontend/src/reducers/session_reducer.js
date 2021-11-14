const { RECIEVE_USER_LOGOUT, RECIEVE_USER_SIGN_IN,RECEIVE_CURRENT_USER } = require("../actions/session_actions");

const intitalState = {
    isAuthenticated: false,
    user: {}
};

const sessionReducer = (state = intitalState, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECIEVE_USER_LOGOUT: 
            return{
                isAuthenticated: false,
                user: undefined
            }
        case RECIEVE_USER_SIGN_IN:
            // return{
            //     isAuthenticated: true,
            //     user: action.user
            // }
        case RECEIVE_CURRENT_USER:
        
        default:
            return state;
    }



}



export default sessionReducer;