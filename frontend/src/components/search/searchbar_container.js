import { connect } from "react-redux"
import { searchForFriend, sendRequest } from "../../actions/friend_actions"
import SearchBar from './searchbar';

const mapDispatchToProps = dispatch => ({
    searchForFriend: email => dispatch(searchForFriend(email)),
    sendRequest: userId => dispatch(sendRequest(userId))
});


export default connect(null, mapDispatchToProps)(SearchBar);
