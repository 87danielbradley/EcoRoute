import { connect } from "react-redux";
import { updateAnEvent } from "../../actions/event_actions";
import EventForm from "./event_form";

const mapStateToProps = (state, ownProps) => {
   const emptyEvent = {
        title: '',
        category: '',
        date: new Date(),
        attendees: [],
        hidden: false
    };
  try {
    const eventId = state.appState.currentEditEventId;
    console.log(eventId)
    console.log("state.events[eventId]", state.events[eventId])
    const emptyEvent = {
          title: '',
          category: '',
          date: new Date(),
          attendees: [],
          hidden: false
      }      
      const event =  state.events[eventId]
      console.log("EVENT", event)
      event.attendees  = Object.values(event.attendees).map(attendee=> attendee.username).filter(name => name !== undefined);
      console.log(event.attendees)

    return {
      event:  event, //!eventId ? emptyEvent : state.events[eventId],
      formType: "Update Event",
      friends: Object.values(state.friends).map(friend => friend.username).filter(name => name !== undefined),
      allState: state
    }

    
  } catch (error) {
    console.log(error)
    return {
    event: emptyEvent,
    formType: "Update Event"
}
    
  }
}


const mapDispatchToProps = dispatch => {
  
  return {
    action: (event) => dispatch(updateAnEvent(event)), 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

