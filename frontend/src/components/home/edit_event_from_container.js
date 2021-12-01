import { connect } from "react-redux";
import { updateAnEvent } from "../../actions/event_actions";
import EventForm from "./event_form";

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match && ownProps.match.params.eventId;
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
    formType: "Update Event"
}
}


const mapDispatchToProps = dispatch => {
  return {
    action: (event) => dispatch(updateAnEvent(event)), 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

