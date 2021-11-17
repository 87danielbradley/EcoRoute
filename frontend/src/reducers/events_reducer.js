import { RECEIVE_USER_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from "../actions/event_actions";

const initialState = {
   1: {
    title: 'Beethoven Concert',
    category: 'Music',
    user: 100,
    attendees: [
        {geometry: {coordinates: [-73.906021, 40.745541], type: "Point"}},
        {geometry: {coordinates: [-73.906022, 40.745541], type: "Point"}},
        {geometry: {coordinates: [-73.906023, 40.745541], type: "Point"}},
        {geometry: {coordinates: [-73.906024, 40.745541], type: "Point"}},
        {geometry: {coordinates: [-73.906025, 40.745541], type: "Point"}},
        {geometry: {coordinates: [-73.906026, 40.745541], type: "Point"}},
        {geometry: {coordinates: [-73.906027, 40.745541], type: "Point"}},
        {geometry: {coordinates: [-73.906028, 40.745541], type: "Point"}},
        {geometry: {coordinates: [-73.906029, 40.745541], type: "Point"}},
        {geometry: {coordinates: [-73.906030, 40.745541], type: "Point"}},
        {geometry: {coordinates: [-73.906031, 40.745541], type: "Point"}},
        {geometry: {coordinates: [-73.906032, 40.745541], type: "Point"}},
        {geometry: {coordinates: [-73.906033, 40.745541], type: "Point"}}
        
    ],
    id: 1,
    date: 'November 24, 2021',

  },
  
  2: {
   title: 'Dinner Pary',
    category: '',
      user: 101,
    attendees: [
           {geometry: {coordinates: [-73.906021, 40.745541], type: "Point"}},
        {geometry: {coordinates: [-73.906022, 40.745541], type: "Point"}},
        {geometry: {coordinates: [-73.906023, 40.745541], type: "Point"}},
        {geometry: {coordinates: [-73.906024, 40.745541], type: "Point"}},
        {geometry: {coordinates: [-73.906025, 40.745541], type: "Point"}},
        {geometry: {coordinates: [-73.906026, 40.745541], type: "Point"}},
        {geometry: {coordinates: [-73.906027, 40.745541], type: "Point"}},
        {geometry: {coordinates: [-73.906028, 40.745541], type: "Point"}},
        {geometry: {coordinates: [-73.906029, 40.745541], type: "Point"}},
        {geometry: {coordinates: [-73.906030, 40.745541], type: "Point"}},
        {geometry: {coordinates: [-73.906031, 40.745541], type: "Point"}},
        {geometry: {coordinates: [-73.906032, 40.745541], type: "Point"}},
        {geometry: {coordinates: [-73.906033, 40.745541], type: "Point"}}
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