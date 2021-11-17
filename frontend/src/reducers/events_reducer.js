import { RECEIVE_USER_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from "../actions/event_actions";

const initialState = {
   1: {
    title: 'Beethoven Concert',
    category: 'Music',
    user: 100,
    attendees: [
        {geometry: {coordinates: [-73.9054, 40.7445], type: "Point"}},
        {geometry: {coordinates: [-73.9063, 40.7466], type: "Point"}},
        {geometry: {coordinates: [-73.9072, 40.7457], type: "Point"}},
        {geometry: {coordinates: [-73.9053, 40.7434], type: "Point"}},
        {geometry: {coordinates: [-73.9054, 40.7444], type: "Point"}},
        {geometry: {coordinates: [-73.9054, 40.7450], type: "Point"}}
    ],
    id: 1,
    date: 'November 24, 2021',

  },
  
  2: {
   title: 'Dinner Pary',
    category: '',
      user: 101,
    attendees: [
        {geometry: {coordinates: [-73.9054, 40.7445], type: "Point"}},
        {geometry: {coordinates: [-73.9063, 40.7466], type: "Point"}},
        {geometry: {coordinates: [-73.9072, 40.7457], type: "Point"}},
        {geometry: {coordinates: [-73.9053, 40.7434], type: "Point"}},
        {geometry: {coordinates: [-73.9054, 40.7444], type: "Point"}},
        {geometry: {coordinates: [-73.9054, 40.7450], type: "Point"}}
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