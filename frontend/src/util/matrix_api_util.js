import axios from "axios";
const accessToken = process.env.REACT_APP_MAPBOX; 


export const getMatrix = (attendees, places) => {
    let locations = []
    attendees.map(attendee => locations.push(...attendee.location))
    places.map(place => locations.push(...place))
    return axios.get(`https://api.mapbox.com/directions-matrix/v1/mapbox/driving/${locations.join(';')}?approaches=curb;curb;curb&access_token=${accessToken}`)
};
// location example
// -122.42,37.78;-122.45,37.91;-122.48,37.73



