import * as APIUtil from "../util/friends_api_util";

export const RECEIVE_FRIEND_REQUEST ="RECEIVE_FRIEND_REQUEST";
export const REMOVE_FRIEND_REQUEST = "REMOVE_FRIEND_REQUEST";

const receiveFrinedRequest = request => ({
    type: RECEIVE_FRIEND_REQUEST,
    request
});