import { RECEIVE_MATRIX, RECEIVE_PLACES } from "../actions/matrix_actions";


const intitalState = {
    matrix: {},
    places: {}
};

const matrixApiReducer = (state = intitalState, action) => {
    Object.freeze(state);
    let nextState; 
    switch(action.type){
        case RECEIVE_MATRIX:
            nextState = Object.assign({}, state);
            nextState['matrix'] = action.matrix.data;
            return nextState
        case RECEIVE_PLACES:
            nextState = Object.assign({}, state);
            nextState['places'] = action.places.data;
            return nextState
        default:
            return state;
    }



}



export default matrixApiReducer;
