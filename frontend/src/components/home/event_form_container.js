import { connect } from "react-redux";
import { createAnEvent } from "../../actions/event_actions";
import EventForm from "./event_form";
import {findPlacesNearby, fetchMatrix} from "../../actions/matrix_actions"

const mapStateToProps = (state) => {
 
  const featureArray = []
  if (state.navigation.places.features){
    
    state.navigation.places.features.map(feature => featureArray.push(feature.center))
  }
  
  return (
  
    {event: {
        title: '',
        category: '',
        date: new Date(),
        attendees: [],
        hidden: false
    },
    formType: "Create Event",
    friends: Object.values(state.friends).map(friend => friend.username).filter(name => name !== undefined),
    allState: state,
    placesPojo: state.navigation.places,
    placesLocation: featureArray
  }
  )

}


const mapDispatchToProps = dispatch => {
  return {
    action: (event) => dispatch(createAnEvent(event)),
    findPlacesNearby: (query, nearby) => dispatch(findPlacesNearby(query, nearby)),
    fetchMatrix: (attendeesArray, placesArray) => dispatch(fetchMatrix(attendeesArray, placesArray))
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

