import React from "react";
import AutoComplete from "./auto_complete"

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: null,
            searchFriends: this.props.friends
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAddFriend = this.handleAddFriend.bind(this)
    }

    // handleChange(type) {
    //     return (e) => (
    //         this.setState({[type]: e.currentTarget.value})
    //     )
    // }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchSearchedUser(e.currentTarget.innerText)
        console.log(this.props.searchedUser)
    }
    
    handleAddFriend() {
        this.props.sendRequest(this.props.searchedUser[0].id)
            .then(() => this.props.resetSearchedUser())
        // reset searchedUser
    }

    render() {
        // console.log("searchFriends", this.state.searchFriends)
        let addButton;
        if (this.props.searchedUser.length) {
            addButton = (
                <button onClick={this.handleAddFriend}>Add Friend</button>
            )
        } else {
            addButton = (<div className="nothing-searched"></div>)
        }
        return (
            <div className="search-bar">
                <form onSubmit={this.handleSubmit}>
                    <AutoComplete handleAddFriend={this.handleAddFriend} suggestions={this.state.searchFriends} handleSubmit={this.handleSubmit}/>
                </form>
                {addButton}
            </div>
        )
    }
}

export default SearchBar;