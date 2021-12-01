import React from "react";
import { connect } from "react-redux";
import MapboxView from "./mapbox_view"
import {findPlacesNearby} from "../../actions/matrix_actions"
import { getPlaces } from "../../util/matrix_api_util";

const mSTP = (state ={}, ownProps) => {
  
    return {events: Object.values(state.events).sort(function (a, b) {
  return new Date(a.date) - new Date(b.date);
}),
    eventType: 'event'}
}

//  return {events: Object.values(state.events).sort(function (a, b) {
//   return new Date(a.date) - new (b.date);


const mDTP = (dispatch, ownProps) => ({
    findPlacesNearby: (query, nearby) => findPlacesNearby(query, nearby),
    getPlaces: (query, nearby) => getPlaces(query, nearby)

    
})

export default connect(mSTP,mDTP)(MapboxView);