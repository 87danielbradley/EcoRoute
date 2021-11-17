import { RECEIVE_USER_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from "../actions/event_actions";

const initialState = {
   1: {
    title: 'Beethoven Concert',
    category: 'Music',
    user: 100,
    attendees: [],
    _id: 1,
    date: 'November 24, 2021',

  },
  
  2: {
   title: 'Dinner Pary',
    category: '',
      user: 101,
    attendees: [],
    _id: 2,
    date: 'November 24, 2021',
  
    }

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