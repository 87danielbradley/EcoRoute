import React from "react";
import { connect } from "react-redux";
import MapboxView from "./mapbox_view"
import {findPlacesNearby} from "../../actions/matrix_actions"
import { getPlaces } from "../../util/matrix_api_util";

const mSTP = (state ={}, ownProps) => {
   
    return {events: Object.values(state.events),
    eventType: 'event'}
}

const mDTP = (dispatch, ownProps) => ({
    findPlacesNearby: (query, nearby) => findPlacesNearby(query, nearby),
    getPlaces: (query, nearby) => getPlaces(query, nearby)

    
})

export default connect(mSTP,mDTP)(MapboxView);