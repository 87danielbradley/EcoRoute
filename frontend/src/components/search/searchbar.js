import React from "react";
import AutoComplete from "./auto_complete"

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: null
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAddFriend = this.handleAddFriend.bind(this)
    }

    handleChange(type) {
        return (e) => (
            this.setState({[type]: e.currentTarget.value})
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchSearchedUser(e.currentTarget.innerText)
        console.log(this.props.searchedUser)
    }
    
    handleAddFriend() {
        debugger
        this.props.sendRequest(this.props.searchedUser[0].id)
        // reset searchedUser
    }

    render() {
        let addButton;
        if (this.props.searchedUser.length) {
            addButton = (
                <button>Add Friend</button>
            )
        } else {
            addButton = (<div className="nothing-searched"></div>)
        }
        return (
            <div className="search-bar">
                <form onSubmit={this.handleSubmit}>
                    <AutoComplete handleAddFriend={this.handleAddFriend} suggestions={['tyler@tyler.com', 'lillybean@lillybean.com']}/>
                </form>
                {addButton}
            </div>
        )
    }
}

export default SearchBar;