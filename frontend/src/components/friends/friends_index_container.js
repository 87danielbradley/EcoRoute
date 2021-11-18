import { connect } from "react-redux";
import FriendsIndex from "./friends_index";
import { sendRequest, fetchFriend } from "../../actions/friend_actions";

const mapStepToProps = state => {
    return({
        friends: state.session.user.friends
    })
};

const mapDispatchToProps = dispatch => ({
    fetchFriend: userId => dispatch(fetchFriend(userId))
});

export default connect(mapStepToProps, mapDispatchToProps)(FriendsIndex);