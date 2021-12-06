import { RECEIVE_USER_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from "../actions/event_actions";

const initialState = {
   1: {
    title: 'Demo Party',
    category: 'Food',
    user: "6191d63c0900114e7bfdfba1",
    location: [-73.913660, 40.712631],
    attendees: [ 
       
        {location: [-73.855771, 40.743477], username: 'Tyler' },
        {location: [-73.939413, 40.744694], username: 'Sydney' },
        {location: [-73.962951, 40.660848], username: 'Daniel' },
        {location: [-73.874186, 40.661238], username: 'Mickey' }
        
    ],
    _id: "61a549e4badb7deff58b0906",
    date: '2030-11-29T21:45:08.233Z',
  }

  // ,
  
  // 2: {
  //  title: 'Phili Cheesesteak Annual',
  //   category: 'Games',
  //     user: "6191d63c0900114e7bfdfba1",
  //   attendees: [
  //     {location: [-75.1330394, 39.93935085], username: "philifan1"},
  //     {location: [-75.13305, 39.93936], username: "philifan2"},
  //     {location: [-75.13308, 39.93938], username: "philifan3"},
  //     {location: [-75.13310, 39.93935085], username: "philifan4"},
  //     {location: [-75.132, 39.93935085], username: "philifan5"},
  //     {location: [-75.1330394, 39.9394], username: "philifan6"}
  //   ],
  //   _id: "61a5499f315a985ae1e26c8e",
  //   date: '2019-11-29T21:43:59.113Z',
  
  //   },
  //   3: {
  //   title: 'Tyler\'s Exclusive',
  //   category: 'Music',
  //   user: "6191d63c0900114e7bfdfba1",
  //   attendees: [
  //     {location: [-83.1137366, 32.3293809]},
  //       {location: [-83.906110, 32.745541]},
  //       {location: [-83.906215, 32.745541]},
  //       {location: [-83.906320, 32.745541]},
  //       {location: [-83.906425, 32.745541]},
  //       {location: [-83.906530, 32.745541]},
  //       {location: [-83.906635, 32.745541]},
  //       {location: [-83.906732, 32.745541]},
  //       {location: [-83.906845, 32.745541]},
  //       {location: [-83.906950, 32.745541]},
  //       {location: [-83.908355, 32.745541]},
  //       {location: [-83.907160, 32.745541]},
  //       {location: [-83.907265, 32.745541]},
  //       {location: [-83.906005, 32.745041]},
  //       {location: [-83.906110, 32.745141]},
  //       {location: [-83.906215, 32.745241]},
  //       {location: [-83.906320, 32.745341]},
  //       {location: [-83.906425, 32.745441]},
  //       {location: [-83.906530, 32.745541]},
  //       {location: [-83.906635, 32.745641]},
  //       {location: [-83.906732, 32.745741]},
  //       {location: [-83.906845, 32.745841]},
  //       {location: [-83.906950, 32.745941]},
  //       {location: [-83.908355, 32.741041]},
  //       {location: [-83.907160, 32.741141]},
  //       {location: [-83.907265, 32.741241]}
  //   ],
  //   _id: "61a65cc15071d6cf82d69c30",
  //   date: '2022-11-29T21:42:42.989Z',

  // },
  // 4: {
  //  title: 'Clam Chowder Cookoff',
  //   category: 'Music',
  //     user: "6191d63c0900114e7bfdfba1",
  //   attendees: [
  //     {location: [-72.042366, 42.3708774]},
  //     {location: [-72.032366, 42.3718774]},
  //     {location: [-72.012366, 42.3728774]},
  //     {location: [-72.022366, 42.3738774]},
  //     {location: [-72.042366, 42.3748774]},
  //     {location: [-72.052366, 42.3758774]},
  //     {location: [-72.002366, 42.3768774]}
      
  //   ],
  //   _id: "61a65ce65071d6cf82d69c33",
  //   date: "2020-11-29T21:40:25.585Z",
  
  //   }
}


const EventsReducer = (oldState = initialState, action) => {
  
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_USER_EVENTS:
          // console.log(" RECEIVE_USER_EVENTS", action)
       
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