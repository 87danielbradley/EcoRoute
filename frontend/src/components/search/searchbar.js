import React from "react";


class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: null,
            user: null
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
        this.props.searchForFriend(this.state)
            .then(user => {
                this.setState({ user: user })
            })
    }
    
    handleAddFriend() {
        this.props.sendRequest(this.state.user.id)
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

export default SearchBar;