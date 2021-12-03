import { connect } from "react-redux"
import { sendRequest } from "../../actions/friend_actions"
import { fetchSearchedUser, resetSearchedUser } from "../../actions/search_actions";
import SearchBar from './searchbar';

const mapStateToProps = state => {
    let searchFriends = Object.values(state.friends).filter(friend => friend.friendsState === 0)
        .map(friend => friend.email)
    return({
        currentUser: state.session.user,
        friends: searchFriends,
        searchedUser: Object.values(state.searchResult)
    })
}

const mapDispatchToProps = dispatch => ({
    fetchSearchedUser: email => dispatch(fetchSearchedUser(email)),
    resetSearchedUser: () => dispatch(resetSearchedUser()),
    sendRequest: userId => dispatch(sendRequest(userId))
});


export default connect( mapStateToProps, mapDispatchToProps)(SearchBar);
