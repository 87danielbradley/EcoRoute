import { connect } from "react-redux";
import { createAnEvent } from "../../actions/event_actions";
import EventForm from "./event_form";
import {findPlacesNearby, fetchMatrix} from "../../actions/matrix_actions";
import { setModalStatus } from "../../actions/app_actions";

const mapStateToProps = (state) => {


  const featureArray = []
  if (state.navigation.places.features){
    
    state.navigation.places.features.map(feature => featureArray.push(feature.center))
    
  }
  let sortedPlaces = []
  if (state.navigation.matrix.durations){
    
    const transposed = state.navigation.matrix.durations[0].map((ele,idx) => state.navigation.matrix.durations.map(ele => ele[idx]))
    const reduced = transposed.map(array => array.reduce((acc, val) => (acc+val))/ array.length)
    

    sortedPlaces = state.navigation.places.features.map((feature,idx) => {
                  if (!feature.time){
                    feature.time = reduced[idx]}
                    return feature}
                  )
    
  }
  
  // friends: Object.values(state.friends).map(friend => friend.username).filter(name => name !== undefined),
  return (
  
    {event: {
        title: '',
        category: '',
        date: new Date(),
        attendees: [],
        hidden: false
    },
    events: state.events,
    currentUser: state.session.user,
    formType: "Create Event",
    friends: Object.values(state.friends).filter(friend => friend.friendsState > 0).map(user => user.username),
    allState: state,
    placesPojo: state.navigation.places,
    placesLocation: featureArray,
    sortedPlaces: sortedPlaces.sort(function (a, b) {
                    return a.time - b.time
                  })
    })
}


const mapDispatchToProps = dispatch => {
  
  return {
    action: (event,currentUser) => dispatch(createAnEvent(event, currentUser)),
    findPlacesNearby: (query, nearby) => dispatch(findPlacesNearby(query, nearby)),
    fetchMatrix: (attendeesArray, placesArray) => dispatch(fetchMatrix(attendeesArray, placesArray)),
    closeModalEvent: () => { 
            dispatch(setModalStatus(false))
        }
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

