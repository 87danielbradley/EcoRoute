import { connect } from "react-redux";
import { createAnEvent } from "../../actions/event_actions";
import EventForm from "./event_form";

const mapStateToProps = state => ({
    event: {
        title: '',
        category: '',
        date: new Date(),
        attendees: [],
        hidden: false
    },
    formType: "Create Event"
})


const mapDispatchToProps = dispatch => {
  return {
    action: (event) => dispatch(createAnEvent(event)), 
  
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

