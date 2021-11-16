import { RECEIVE_USER_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from "../actions/event_actions";

const initialState = {
    all: [{
    title: 'Beethoven Concert',
    category: 'Music',
    user: 2,
    attendees: [],
    _id: 1,
    date: 'November 24, 2021',
    time: '2.00 pm',
  },
  
  {
   title: 'Dinner Pary',
    category: '',
      user: 25464,
    attendees: [],
    _id: 2,
    date: 'November 24, 2021',
    time: '2.00 pm',
  
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