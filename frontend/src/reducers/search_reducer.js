import { RECEIVE_SEARCHED_USER } from "../actions/search_actions";

const SearchReducer = (state={}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_SEARCHED_USER:
            // debugger
            nextState[action.user.data.id] = action.user.data

            return nextState;
        default:
            return state;
    
    }
}

export default SearchReducer;