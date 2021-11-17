import * as APIUtil from "../util/friends_api_util";

export const RECEIVE_FRIEND_REQUEST ="RECEIVE_FRIEND_REQUEST";
export const REMOVE_FRIEND_REQUEST = "REMOVE_FRIEND_REQUEST";

const receiveFrinedRequest = request => ({
    type: RECEIVE_FRIEND_REQUEST,
    request
});

const removeFriendRequest = request => ({
    type: REMOVE_FRIEND_REQUEST,
    request
});

export const sendFriendRequest = userId => {
    return (
        APIUtil.sendFriendRequest(userId)
            .then(request => dispatch(receiveFrinedRequest(request)))
            .catch(error => console.log(error))
    )
};

export const acceptFriendRequest = requestId => {
    return (
        APIUtil.acceptFriendRequest(requestId)
            .then(request => dispatch(receiveFrinedRequest(request)))
    )
};

// export const cancelFriendRequest = requestId => {
//     return (
//         APIUtil.cancelFriendRequest(requestId)
//     )
// }