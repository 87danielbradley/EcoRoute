import * as APIUtil from "../util/friends_api_util";

export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const FRIEND_REQUEST = "FRIEND_REQUEST";

const receiveFriend = friend => ({
    type: RECEIVE_FRIEND,
    friend
});

const receiveFriendRequest = () => ({
    type: FRIEND_REQUEST
})

export const fetchFriend = userId => dispatch => {
    return (
        APIUtil.getFriend(userId)
            .then( friend => dispatch(receiveFriend(friend)))
            .catch(err => console.log("ERROR FRIENDS!",err))
    )
};

export const sendRequest = userId => (dispatch) =>  {
    // debugger
    return (
        APIUtil.sendFriendRequest(userId)
        .then(() => dispatch(receiveFriendRequest()))
        .catch(err => console.log(err))
    )
};

export const searchForFriend = email => dispatch => {
    return (
        APIUtil.searchUsersByEmail(email)
        .then(user => dispatch(receiveFriend(user)))
        .catch(err => console.log(err))
    )
};



