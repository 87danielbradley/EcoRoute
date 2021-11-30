import { connect } from "react-redux";
import FriendsIndex from "./friends_index";
import { fetchAllFriends, declineFriend } from "../../actions/friend_actions";

const mapStepToProps = state => {
    return({
        friends: state.friends,
        currentUser: state.session.user.id
    })
};

const mapDispatchToProps = dispatch => ({
    fetchAllFriends: userId => dispatch(fetchAllFriends(userId)),
    removeFriend: (userId, userB) => dispatch(declineFriend(userId, userB))
});

export default connect(mapStepToProps, mapDispatchToProps)(FriendsIndex);