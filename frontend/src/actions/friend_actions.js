import * as APIUtil from "../util/friends_api_util";

export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";
export const RECEIVE_ALL_FRIENDS = "RECEIVE_ALL_FRIENDS";

const receiveAllFriends = (friends) => ({
    type: RECEIVE_ALL_FRIENDS,
    friends
})

const receiveFriend = friend => ({
    type: RECEIVE_FRIEND,
    friend
});

const removeFriend = userB => ({
    type: REMOVE_FRIEND,
    userB
})





export const fetchFriend = userId => dispatch => {
    return (
        APIUtil.getFriend(userId)
            .then( friend => dispatch(receiveFriend(friend)))
            .catch(err => console.log("ERROR FRIENDS!",err))
    )
};

export const sendRequest = (userId, userB) => (dispatch) =>  {
    return (
        APIUtil.sendFriendRequest(userId, userB)
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

export const fetchAllFriends = userId => dispatch => {
    return (
        APIUtil.getAllFriends(userId)
        .then(friends => dispatch(receiveAllFriends(friends)))
        .catch(err => console.log(err))
    )
}

export const declineFriend = (userId, userB) => dispatch => { //userId => current User, userB=> other person being declined
    return (
        APIUtil.declineFriendRequest(userId, userB)
        .then(() => dispatch(removeFriend(userB))) 
    )
}



