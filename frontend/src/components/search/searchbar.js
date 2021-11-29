import React from "react";
import { 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    IconButton,
    List,
    ListItemIcon,
    ListItemText,
    TextField,
    Typography,
    ListItem
} from '@mui/material';


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
            // <form onSubmit={this.handleSubmit}>
            //     <input
            //         type="text"
            //         placeholder="email"
            //         onChange={this.handleChange('email')}
            //     />
            // </form>
            <div>
            <Dialog fullWidth maxWidth="sm" open="">
                <DialogContent>
                    <TextField
                        style={{ width: '100%' }}
                        onChange={this.handleChange('email')}
                        variant="outlined"
                        placeholder="Enter Friends Email"
                    />
                    <Button
                        style={{ width: '100%', marginTop: '16px' }}
                        variant="contained"
                        color="primary"
                        onClick={this.props.searchForFriend}
                    >Search
                    </Button>
                        {/* <List>
                            <ListItem
                                button
                                key={user.id}
                            >
                                <ListItemText style={{ marginLeft: '8px' }}>
                                    <Typography
                                        style={{ fontSize: '15px', fontWeight: '700' }}
                                    >
                                        {user.name}
                                    </Typography>
                                    <Typography>{user.email}</Typography>
                                </ListItemText>
                            </ListItem>
                        </List> */}
                </DialogContent> 
            </Dialog >
            </div>
        )
    }
}

export default SearchBar;