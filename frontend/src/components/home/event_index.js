import React from "react";
import EventIndexItem from "./event_index_item";
import { connect } from "react-redux";
import { fetchUserEvents, deleteAnEvent, updateAnEvent} from "../../actions/event_actions";
import { setEditingEvent, setModalStatus }  from '../../actions/app_actions'
class EventIndex extends React.Component{

    componentDidMount(){
     
        this.props.fetchUserEvents(this.props.currentUser.id);
    }

    render(){

        const {events, deleteEvent, openModalAndEditEvent} = this.props;
        // console.log(events)

        return(
            <div className="event-index-item">
                <h1>Events</h1>

                {
                    events.reverse().map((event, i) => {
                        return (event !== undefined && 
                        <EventIndexItem 
                            key={i} event={event} 
                            deleteEvent={deleteEvent}
                            openModalAndEditEvent={openModalAndEditEvent}
                            
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
        currentUser: state.session.user
    }
}


const mapDispatchToProps = dispatch => {
    return {
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
