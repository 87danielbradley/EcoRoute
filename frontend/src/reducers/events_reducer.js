import { RECEIVE_USER_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from "../actions/event_actions";

const initialState = {
   1: {
    title: 'Clam Chowder Cookoff',
    category: 'Food',
    user: "6191d63c0900114e7bfdfba1",
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
    _id: "61a549e4badb7deff58b0906",
    date: '2021-11-29T21:45:08.233Z',

  },
  
  2: {
   title: 'Tyler\'s Exclusive',
    category: 'Games',
      user: "6191d63c0900114e7bfdfba1",
    attendees: [
      {location: [-75.1330394, 39.93935085]},
      {location: [-75.13305, 39.93936]},
      {location: [-75.13308, 39.93938]},
      {location: [-75.13310, 39.93935085]},
      {location: [-75.132, 39.93935085]},
      {location: [-75.1330394, 39.9394]}
    ],
    _id: "61a5499f315a985ae1e26c8e",
    date: '2021-11-29T21:43:59.113Z',
  
    },
    3: {
    title: 'Phili Cheesesteak Annual',
    category: 'Music',
    user: "6191d63c0900114e7bfdfba1",
    attendees: [
      {location: [-83.1137366, 32.3293809]},
        {location: [-83.906110, 32.745541]},
        {location: [-83.906215, 32.745541]},
        {location: [-83.906320, 32.745541]},
        {location: [-83.906425, 32.745541]},
        {location: [-83.906530, 32.745541]},
        {location: [-83.906635, 32.745541]},
        {location: [-83.906732, 32.745541]},
        {location: [-83.906845, 32.745541]},
        {location: [-83.906950, 32.745541]},
        {location: [-83.908355, 32.745541]},
        {location: [-83.907160, 32.745541]},
        {location: [-83.907265, 32.745541]},
        {location: [-83.906005, 32.745041]},
        {location: [-83.906110, 32.745141]},
        {location: [-83.906215, 32.745241]},
        {location: [-83.906320, 32.745341]},
        {location: [-83.906425, 32.745441]},
        {location: [-83.906530, 32.745541]},
        {location: [-83.906635, 32.745641]},
        {location: [-83.906732, 32.745741]},
        {location: [-83.906845, 32.745841]},
        {location: [-83.906950, 32.745941]},
        {location: [-83.908355, 32.741041]},
        {location: [-83.907160, 32.741141]},
        {location: [-83.907265, 32.741241]}
    ],
    _id: "61a54952f92a79a1cd663c67",
    date: '2021-11-29T21:42:42.989Z',

  },
  // 4: {
  //  title: 'Woodside Block Party',
  //   category: 'Food',
  //     user: 101,
  //   attendees: [
  //     {location: [-72.042366, 42.3708774]},
  //     {location: [-72.032366, 42.3718774]},
  //     {location: [-72.012366, 42.3728774]},
  //     {location: [-72.022366, 42.3738774]},
  //     {location: [-72.042366, 42.3748774]},
  //     {location: [-72.052366, 42.3758774]},
  //     {location: [-72.002366, 42.3768774]}
      
  //   ],
  //   _id: 4,
  //   date: 'November 24, 2021',
  
  //   }
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
            
            delete nextState[action.eventId];
            return nextState;
        
        default:
            return oldState;
    }
}

export default EventsReducer;