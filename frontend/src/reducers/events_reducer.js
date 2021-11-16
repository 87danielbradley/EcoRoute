import { RECEIVE_USER_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from "../actions/event_actions";

const initialState = {
    events: [
   {
    title: 'Beethoven Concert',
    category: 'Music',
    user: 2,
    attendees: [],
    _id: 1,
    date: Date.now(),
    time: '2.00 pm',
  },
  
  {
   title: 'Dinner Pary',
    category: '',
      user: 25464,
    attendees: [],
    _id: 2,
    date: Date.now(),
    time: '2.00 pm',
  
    }
]
}


const EventsReducer = (state = initialState, action) => {
    // Object.freeze(oldState);
    // let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_USER_EVENTS:
            return {
                ...state,
                events: action.events
            }

        case RECEIVE_EVENT:
             
            return {
                ...state,
                events: [action.event, ...state.events]
            };

        case REMOVE_EVENT:
           
            return {
                ...state,
                events: state.events.filter(event => action.eventId !== event.id)
            }
        
        default:
            return state;
    }
}

export default EventsReducer;