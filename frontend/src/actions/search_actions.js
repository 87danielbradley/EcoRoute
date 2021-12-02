import * as APIUtil from '../util/search_api_util';

export const RECEIVE_SEARCHED_USER = 'RECEIVE_SEARCHED_USER'


const receiveSearchedUser = user => ({
    type: RECEIVE_SEARCHED_USER,
    user
})


export const fetchSearchedUser = email => dispatch => {
    return (
        APIUtil.searchUsers(email)
            .then((user) => dispatch(receiveSearchedUser(user)))
            .catch(err => console.log(err))
    )
}