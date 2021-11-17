import { RECEIVE_USER_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from "../actions/event_actions";

// const initialState = {
//    1: {
//     title: 'Beethoven Concert',
//     category: 'Music',
//     user: 100,
//     attendees: ["mickey", "daniel"],
//     id: 1,
//     date: 'November 24, 2021',

//   },
  
//   2: {
//    title: 'Dinner Pary',
//     category: 'Food',
//       user: 101,
//     attendees: ["sydney", "tyler"],
//     id: 2,
//     date: 'November 24, 2021',
  
//     }

// }


const EventsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_USER_EVENTS:
       
            action.events.data.forEach(event => {
               
                 nextState[event._id] = event
                });
            return nextState

        case RECEIVE_EVENT:
             nextState[action.event.data._id] = action.event.data;
            return nextState;

        case REMOVE_EVENT:
            debugger
            delete nextState[action.eventId];
            return nextState;
        
        default:
            return oldState;
    }
}

export default EventsReducer;