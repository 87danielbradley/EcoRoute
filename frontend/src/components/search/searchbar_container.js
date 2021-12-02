import { connect } from "react-redux"
import { sendRequest } from "../../actions/friend_actions"
import { fetchSearchedUser } from "../../actions/search_actions";
import SearchBar from './searchbar';


const mapDispatchToProps = dispatch => ({
    fetchSearchedUser: email => dispatch(fetchSearchedUser(email)),
    sendRequest: userId => dispatch(sendRequest(userId))
});


export default connect(null, mapDispatchToProps)(SearchBar);
