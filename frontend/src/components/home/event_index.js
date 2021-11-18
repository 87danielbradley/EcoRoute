import React from "react";
import EventIndexItem from "./event_index_item";
import { connect } from "react-redux";
import { fetchUserEvents, deleteAnEvent, updateAnEvent} from "../../actions/event_actions";
import { setEditingEvent, setModalStatus }  from '../../actions/app_actions'
import { fetchFriend, sendRequest } from '../../actions/friend_actions'
import CreateEventModal from './create_event_modal'
import './home.css'
class EventIndex extends React.Component{

    componentDidMount(){
        const { currentUser} = this.props
        this.props.fetchFriendRequest('619536e7cc98bcda226fcff3');
        this.props.fetchFriends(currentUser.id);
        this.props.fetchUserEvents(currentUser.id);
        // this.props.currentUser.friends.map( friend => {
        //     this.props.fetchUser(friend)
        // })
    }

    render(){

        const {events, deleteEvent, openModalAndEditEvent} = this.props;
        // console.log(events)

        return(
            <div className="event-index-item">
                <div className="events-header">
                    <h1>Events</h1>
                    <span><CreateEventModal /></span>
                </div>

                {
                    events.reverse().map((event, i) => {
                        return (event !== undefined && 
                        <EventIndexItem 
                            key={i} event={event} 
                            eventIndex={i}
                            deleteEvent={deleteEvent}
                            openModalAndEditEvent={openModalAndEditEvent}
                             renderMap={index => this.props.renderMap(index)}
                            
                        />)
                    })
                }

            </div>
        )
    }
    
}


const mapStateToProps = state => {
    return {
        // events: state.events.events
        events: Object.values(state.events),
        // events: Object.values(state.events).filter(event => event.attendees.includes(state.session.user.id)),
        currentUser: state.session.user
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchFriendRequest: (userId) => dispatch(sendRequest(userId)),
        fetchFriends: (userId) => dispatch(fetchFriend(userId)),
        fetchUserEvents: (userId) => dispatch(fetchUserEvents(userId)),
        deleteEvent: (eventId) => dispatch(deleteAnEvent(eventId)),
        openModalAndEditEvent: (eventId) => { 
            console.log("EVENT ID", eventId)
            dispatch(setEditingEvent(eventId));
            dispatch(setModalStatus(true))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex)
