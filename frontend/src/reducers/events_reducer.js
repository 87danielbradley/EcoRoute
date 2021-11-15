import { RECEIVE_ALL_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from "../actions/event_actions";

const initialState = {
    
  1: {
    id: 1,
    title: 'Beethoven Concert',
    date: 'November 24, 2021',
    time: '2.00 pm',
    location: "Maine"
  },
  2: {
    id: 2,
    title: 'Dog Show',
    date: 'with shampoo',
    time: '3,.00 pm'
  
    }
}

const EventsReducer = (oldState = initialState, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_EVENTS:
            return action.events;

        case RECEIVE_EVENT:
             nextState[action.event.id] = action.event;
            return nextState;

        case REMOVE_EVENT:
            delete nextState[action.eventId];
            return nextState;
        
        default:
            return oldState;
    }
}

export default EventsReducer;