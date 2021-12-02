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

       const featureArray = []
    if (state.navigation.places.features){
      
      state.navigation.places.features.map(feature => featureArray.push(feature.center))
      debugger
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
      debugger
    }
    return {
      event:  event, //!eventId ? emptyEvent : state.events[eventId],
      formType: "Update Event",
      friends: Object.values(state.friends).map(friend => friend.username).filter(name => name !== undefined),
      allState: state,
      placesPojo: state.navigation.places,
      placesLocation: featureArray,
      sortedPlaces: sortedPlaces.sort(function (a, b) {
                      return a.time - b.time
                    })
    
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

