import { connect } from "react-redux";
import { createAnEvent } from "../../actions/event_actions";
import EventForm from "./event_form";

const mapStateToProps = (state) => {

  return (
  
    {event: {
        title: '',
        category: '',
        date: new Date(),
        attendees: [],
        hidden: false
    },
    formType: "Create Event",
    friends: Object.values(state.friends).map(friend => friend.username).filter(name => name !== undefined)
  }
  )

}


const mapDispatchToProps = dispatch => {
  return {
    action: (event) => dispatch(createAnEvent(event))
   
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

