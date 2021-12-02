import axios from "axios";
const accessToken = process.env.REACT_APP_MAPBOX; 


export const getMatrix = (attendees, places) => {

    let locations = []
    attendees.map(attendee => locations.push(...attendee.location))
    places.map(place => locations.push(...place))
    console.log("LOCATIONS", locations)
    const locationAt = semiColon(locations)
    // return Promise.resolve()
    debugger
    return axios.get(`https://api.mapbox.com/directions-matrix/v1/mapbox/driving/${locationAt.join(';')}?approaches=curb;curb;curb&access_token=${accessToken}`)
};
// location example
// -122.42,37.78;-122.45,37.91;-122.48,37.73
// https://api.mapbox.com/directions-matrix/v1/mapbox/driving/-122.42,37.78;-122.45,37.91;-122.48,37.73?approaches=curb;curb;curb&access_token=pk.eyJ1IjoiODdkYW5pZWxicmFkbGV5IiwiYSI6ImNrdzExeXNpczd4NXkzMXMxc3BsZmlpaWkifQ.PQzQgyjHRXQ2ZRyGMdxl7g

//appears to be working

export const getPlaces = (query, nearby) => {
  
    return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?proximity=${nearby.join(',')}&access_token=${accessToken}`)
};

//output example
//https://api.mapbox.com/geocoding/v5/mapbox.places/peets.json?proximity=-122.3995752,37.7881856&access_token=pk.eyJ1IjoiODdkYW5pZWxicmFkbGV5IiwiYSI6ImNrdzExeXNpczd4NXkzMXMxc3BsZmlpaWkifQ.PQzQgyjHRXQ2ZRyGMdxl7g



function semiColon(arr){
    let newArr = [];
    
    for (let i = 0; i < arr.length - 1; i++){
        newArr.push(`${arr[i]},${arr[i + 1]}`)
    }
    return newArr
}

