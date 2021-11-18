import { connect } from "react-redux";
import { updateAnEvent } from "../../actions/event_actions";
import EventForm from "./event_form";

const mapStateToProps = (state, ownProps) => {
  const eventId = state.appState.currentEditEventId;
  console.log(eventId)
  console.log("state.events[eventId]", state.events[eventId])
  const emptyEvent = {
        title: '',
        category: '',
        date: new Date(),
        attendees: [],
        hidden: false
    };
return {
    event: !eventId ? emptyEvent : state.events[eventId],
    // event: emptyEvent,
    formType: "Update Event"
}
}


const mapDispatchToProps = dispatch => {
  return {
    action: (event) => dispatch(updateAnEvent(event)), 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

