import { connect } from "react-redux"
import { sendRequest } from "../../actions/friend_actions"
import { fetchSearchedUser } from "../../actions/search_actions";
import SearchBar from './searchbar';

const mapStateToProps = state => ({
    currentUser: state.session.user,
    friends: state.friends,
    searchedUser: Object.values(state.searchResult)
})

const mapDispatchToProps = dispatch => ({
    fetchSearchedUser: email => dispatch(fetchSearchedUser(email)),
    sendRequest: userId => dispatch(sendRequest(userId))
});


export default connect( mapStateToProps, mapDispatchToProps)(SearchBar);
