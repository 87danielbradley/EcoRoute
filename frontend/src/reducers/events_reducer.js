import { RECEIVE_USER_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from "../actions/event_actions";

const initialState = {
   1: {
    title: 'Beethoven Concert',
    category: 'Music',
    user: 100,
    attendees: [
        {location: [-73.906005, 40.745541]},
        {location: [-73.906110, 40.745541]},
        {location: [-73.906215, 40.745541]},
        {location: [-73.906320, 40.745541]},
        {location: [-73.906425, 40.745541]},
        {location: [-73.906530, 40.745541]},
        {location: [-73.906635, 40.745541]},
        {location: [-73.906740, 40.745541]},
        {location: [-73.906845, 40.745541]},
        {location: [-73.906950, 40.745541]},
        {location: [-73.907055, 40.745541]},
        {location: [-73.907160, 40.745541]},
        {location: [-73.907265, 40.745541]},
        {location: [-73.906005, 40.745041]},
        {location: [-73.906110, 40.745141]},
        {location: [-73.906215, 40.745241]},
        {location: [-73.906320, 40.745341]},
        {location: [-73.906425, 40.745441]},
        {location: [-73.906530, 40.745541]},
        {location: [-73.906635, 40.745641]},
        {location: [-73.906740, 40.745741]},
        {location: [-73.906845, 40.745841]},
        {location: [-73.906950, 40.745941]},
        {location: [-73.907055, 40.741041]},
        {location: [-73.907160, 40.741141]},
        {location: [-73.907265, 40.741241]}
    ],
    id: 1,
    date: 'November 24, 2021',

  },
  
  2: {
   title: 'Dinner Pary',
    category: 'Food',
      user: 101,
    attendees: [
        {location: [-73.906021, 40.745541]},
        {location: [-73.906022, 40.745541]},
        {location: [-73.906023, 40.745541]},
        {location: [-73.906024, 40.745541]},
        {location: [-73.906025, 40.745541]},
        {location: [-73.906026, 40.745541]},
        {location: [-73.906027, 40.745541]},
        {location: [-73.906028, 40.745541]},
        {location: [-73.906029, 40.745541]},
        {location: [-73.906030, 40.745541]},
        {location: [-73.906031, 40.745541]},
        {location: [-73.906032, 40.745541]},
        {location: [-73.906033, 40.745541]}
    ],
    id: 2,
    date: 'November 24, 2021',
  
    }

}


const EventsReducer = (oldState = initialState, action) => {
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