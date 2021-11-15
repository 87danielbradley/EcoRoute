import { RECEIVE_USER_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from "../actions/event_actions";

const initialState = {
    all: [{
    title: 'Beethoven Concert',
    category: 'Music',
    date: 'November 24, 2021',
    time: '2.00 pm',
    location: "Maine"
  },
  
  {
   title: 'Dinner Pary',
    category: '',
    date: 'November 24, 2021',
    time: '2.00 pm',
    location: "Massachusetts"
  
    }
] 
}

const EventsReducer = (oldState = initialState, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_USER_EVENTS:
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