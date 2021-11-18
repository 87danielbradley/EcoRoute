import React from "react";


class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: null
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(type) {
        return (e) => (
            this.setState({[type]: e.currentTarget.value})
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.searchForFriend(this.state)
    }
    
    handleAddFriend() {
        this.props.sendRequest(userId)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="email"
                    onChange={this.handleChange('email')}
                />
            </form>
        )
    }
}