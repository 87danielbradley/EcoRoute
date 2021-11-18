import { connect } from "react-redux";
import FriendsIndex from "./friends_index";
import { sendRequest, fetchFriend } from "../../actions/friend_actions";

const mapStepToProps = state => {
    return({
        friendIds: state.session.user.friends,
        friends: state.friends
    })
};

const mapDispatchToProps = dispatch => ({
    fetchFriend: userId => dispatch(fetchFriend(userId)),
    sendRequest: userId => dispatch(sendRequest(userId))
    
});

export default connect(mapStepToProps, mapDispatchToProps)(FriendsIndex);