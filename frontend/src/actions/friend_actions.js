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
            .catch(err => console.log(err))
    )
};



