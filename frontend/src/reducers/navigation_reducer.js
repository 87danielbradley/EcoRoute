import { RECEIVE_MATRIX } from "../actions/matrix_actions";


const intitalState = {
   
};

const matrixApiReducer = (state = intitalState, action) => {
    Object.freeze(state);
    let nextState; 
    switch(action.type){
        case RECEIVE_MATRIX:
            nextState = Object.assign({}, state, action.matrix.data);
            return nextState
        
        default:
            return state;
    }



}



export default matrixApiReducer;