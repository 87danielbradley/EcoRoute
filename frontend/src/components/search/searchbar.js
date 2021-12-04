import React from "react";
import AutoComplete from "./auto_complete"
import "./searchbar.css"

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
    componentDidUpdate(prevProps) {
        if (prevProps.friends !== this.props.friends || prevProps.searchedUser !== this.props.searchedUser) {
            this.setState( {searchFriends: this.props.friends} )
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.resetSearchedUser()
        this.props.fetchSearchedUser(e.currentTarget.innerText)
    }
    
    handleAddFriend() {
        this.props.sendRequest(this.props.searchedUser[0].id)
            .then(() => this.props.resetSearchedUser())
        // reset searchedUser
    }

    render() {
        let addButton;
        if (this.props.searchedUser.length) {
            addButton = (
                <button className="search-bar-button" onClick={this.handleAddFriend}>Add Friend</button>
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