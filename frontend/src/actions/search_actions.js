import * as APIUtil from '../util/search_api_util';

export const RECEIVE_SEARCHED_USER = 'RECEIVE_SEARCHED_USER'
export const RESET_SEARCHED_USER = "RESET_SEARCHED_USER";


const receiveSearchedUser = user => ({
    type: RECEIVE_SEARCHED_USER,
    user
})

export const resetSearchedUser = () => ({
    type: RESET_SEARCHED_USER
})


export const fetchSearchedUser = email => dispatch => {
    return (
        APIUtil.searchUsers(email)
            .then((user) => {  
                dispatch(receiveSearchedUser(user))})
            .catch(err => console.log(err))
    )
}