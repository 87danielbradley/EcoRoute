import * as APIutil from "../util/matrix_api_util";
// import jwt_decode from "jwt-decode"

export const RECEIVE_MATRIX = "RECEIVE_MATRIX";
export const RECEIVE_PLACES = "RECEIVE_PLACES";



const receiveMatrix = (matrix) => ({
    type: RECEIVE_MATRIX,
    matrix
});
const receiveNearbyPlaces = (places) => ({
    type: RECEIVE_PLACES,
    places
});


export const fetchMatrix = (attendeesArray, placesArray) => dispatch => APIutil.getMatrix(attendeesArray, placesArray)
    .then( (matrix) => dispatch(receiveMatrix(matrix)));

export const findPlacesNearby = (query, nearby) => dispatch => APIutil.getPlaces(query, nearby)
    .then( (places) => dispatch(receiveNearbyPlaces(places)));
    

