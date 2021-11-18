import * as APIUtil from "../util/friends_api_util";

export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const REMOVE_FRIEND_REQUEST = "REMOVE_FRIEND_REQUEST";

const receiveFriend = friend => ({
    type: RECEIVE_FRIEND,
    friend
});

export const fetchFriend = userId => dispatch => {
    return (
        APIUtil.getFriend(userId)
            .then( friend => dispatch(receiveFriend(friend)))
            .catch(err => console.log("ERROR FRIENDS!",err))
    )
};

export const sendRequest = userId => (dispatch) =>  {
    return (
        APIUtil.sendFriendRequest(userId)
        .then((args) => console.log('friend request sent',args) )
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



