import React from "react";
// import { Link } from "react-router-dom";
import "./messages.css"
import MessagesViewItem from "./message_view_item";

class MessagesView extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            messages: null,
            text: '',
            eventId: null
        }
        // this.state = {
        //     messages: props.messages,
        //     text: '',
        //     eventId: props.eventId
        // }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        // this.props.fetchMessages()
        // console.log(`componentDidMount`)
        // console.log(this.state)
        // console.log(this.props)
        this.props.fetchEventMessages(this.props.eventId)
            .then(response => {
                // console.log("mounted response", response)
            // .then(response => console.log(response));
                
                // return(this.setState({eventId: this.props.eventId, messages: this.props.messages}))
                return(this.setState({eventId: this.props.eventId, messages: response.messages.data}))
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
        this.setState({text: ""})
        // this.props.fetchEventMessages(this.state.eventId)
        //     .then(response => {
        //         return (this.setState({ eventId: this.state.eventId, messages: response.messages.data }))
        //     })
        // this.setState({text: this.state.text})
    }

    componentDidUpdate(prevProps){
        // console.log("updated state", this.state)
        // console.log("updated state.messages", this.state.messages)
        // console.log("updated props.eventId", this.props.eventId)
        if (this.props.eventId !== prevProps.eventId) { //|| this.props.messages !== prevProps.messages){
            // // // 
            // this.setState({eventId: this.props.eventId,
            // messages: this.props.messages})
            this.props.fetchEventMessages(this.props.eventId)
                .then(response => {
                    // .then(response => console.log(response));

                    return (this.setState({ eventId: this.props.eventId, messages: response.messages.data }))
                });
        } else if (this.props.newMessage !== prevProps.newMessage) {
            // console.log("this.props.messages", this.props.messages)
            // console.log("prevProps.messages", prevProps.messages)
            // return (this.setState({ messages: this.props.messages }))

            this.props.fetchEventMessages(this.props.eventId)
                .then(response => {
                    return (this.setState({ eventId: this.props.eventId, messages: response.messages.data }))
                });
        }
    }
    render(){
        // if (!this.state.messages) {
        if (this.state.messages === null || this.state.messages.length === 0) {
        // if (this.state.messages.length === 0) {
            return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input id="temp-input" 
                        type="text"
                        placeholder="Send a message"
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
                        placeholder="Send a message"
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