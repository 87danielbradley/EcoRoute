import React from "react";
import { Link } from "react-router-dom";
import "./messages.css"
import MessagesViewItem from "./message_view_item";

class MessagesView extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            messages: props.messages,
            text: '',
            eventId: props.eventId
        }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        // this.props.fetchMessages()
        
        this.props.fetchEventMessages(this.state.eventId)
            .then(response => {
                
                // return(this.setState({messages: response.messages.data}))
                console.log(response)
                });
    }
    // componentWillReceiveProps(newState) {
    //     this.setState({messages: newState.messages})
    // }


    update() {
        
        return (event) => this.setState({
            text: event.currentTarget.value
        })

    };
    handleSubmit(event){
        event.preventDefault();
        this.props.createMessage({text: this.state.text,
        eventId: this.state.eventId});
        this.setState({text: this.state.text})
        
    }
    componentDidUpdate(prevProps){
        
        if (this.props.eventId !== prevProps.eventId){
            // debugger
            this.setState({eventId: this.props.eventId,
            messages: this.props.messages})
        }
    }
    render(){
        
        if (this.state.messages.length === 0) {
            return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input id="temp-input" 
                        type="text"
                        onChange={this.update()}>
                    </input>
                    <input type="submit" value="&#9998;"></input>
                </form>
                You have no new messages
            </div>)
        } else {
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input id="temp-input" 
                        type="text"
                        onChange={this.update()}>
                    </input>
                    <input type="submit" value="&#9998;"></input>
                </form>
               
                {this.state.messages.map((message) =>(
                    <MessagesViewItem text={message.text} />
                ))}
            </div>
        )
    }}

}

export default MessagesView;