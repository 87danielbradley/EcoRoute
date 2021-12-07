import { connect } from "react-redux";
import { updateAnEvent } from "../../actions/event_actions";
import EventForm from "./event_form";
import { setModalStatus } from "../../actions/app_actions";
import {findPlacesNearby, fetchMatrix} from "../../actions/matrix_actions";
import { FORM_TYPE_UPDATE_EVENT} from '../../constants/events_constants'
const mapStateToProps = (state, ownProps) => {
   const emptyEvent = {
        title: '',
        category: '',
        date: new Date(),
        attendees: [],
        hidden: false,
        location: []
    };
  try {
    const eventId = state.appState.currentEditEventId;
    // console.log(eventId)
    // console.log("state.events[eventId]", state.events[eventId])
    // const emptyEvent = {
    //       title: '',
    //       category: '',
    //       date: new Date(),
    //       attendees: [],
    //       hidden: false
    //   }      
      const event =  state.events[eventId]

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
    return {
      event:  event, //!eventId ? emptyEvent : state.events[eventId],
      formType: "Update Event",
      friends: Object.values(state.friends).filter(friend => friend.friendsState > 0).map(user => user.username),
      allState: state,
      placesPojo: state.navigation.places,
      placesLocation: featureArray,
      currentUser: state.session.user,
      sortedPlaces: sortedPlaces.sort(function (a, b) {
                      return a.time - b.time
                    })
    
    }

    
  } catch (error) {
    console.log(error)
    return {
    event: emptyEvent,
    // formType: FORM_TYPE_UPDATE_EVENT
}
    
  }
}


const mapDispatchToProps = dispatch => {
  
  return {
    action: (event, currentUser) => dispatch(updateAnEvent(event, currentUser)), 
     findPlacesNearby: (query, nearby) => dispatch(findPlacesNearby(query, nearby)),
    fetchMatrix: (attendeesArray, placesArray) => dispatch(fetchMatrix(attendeesArray, placesArray)),
      closeModalEvent: () => { 
            dispatch(setModalStatus(false))
        },

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

