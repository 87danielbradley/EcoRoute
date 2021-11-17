import React from "react";
import { connect } from "react-redux";
import MapboxView from "./mapbox_view"

const mSTP = (state ={}, ownProps) => {
    
    return {events: Object.values(state.events),
    eventType: 'event'}
}

const mDTP = (dispatch, ownProps) => ({
    
})

export default connect(mSTP,mDTP)(MapboxView);