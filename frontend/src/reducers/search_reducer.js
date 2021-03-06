import { RECEIVE_SEARCHED_USER, RESET_SEARCHED_USER } from "../actions/search_actions";

const SearchReducer = (state={}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_SEARCHED_USER:
            nextState[action.user.data.id] = action.user.data
            return nextState;
        case RESET_SEARCHED_USER:
            return {}
        default:
            return state;
    
    }
}

export default SearchReducer;