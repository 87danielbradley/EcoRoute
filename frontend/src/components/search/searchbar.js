import { dividerClasses } from "@mui/material";
import React from "react";
import SearchTags from './search_tags';

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
        this.props.fetchSearchedUser(this.state.email)
    }
    
    handleAddFriend() {
        this.props.sendRequest(this.state.user.id)
    }

    render() {
        
        return (
            <div className="search-bar">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="find friends by email"
                        onChange={this.handleChange('email')}
                    />
                    <button onClick={this.handleSubmit} > Search </button>
                </form>
                {/* <SearchTags /> */}
            </div>
        )
    }
}

export default SearchBar;