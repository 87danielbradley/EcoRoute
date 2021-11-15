/* eslint import/no-webpack-loader-syntax: off */
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
// import accessToken from require('./config/keys').mapbox;
mapboxgl.accessToken = "pk.eyJ1IjoiODdkYW5pZWxicmFkbGV5IiwiYSI6ImNrYXRwMHhseDBzd28zMHBiaXg5MTFzZDMifQ.IiD55RpwRZLXQxddLXVxEw"

class MapboxView extends React.component{
   constructor(props){
       super(props)
   }

   render(){
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom
    });
    });


  return (
  <div>
    <div ref={mapContainer} className="map-container" />
  </div>
);
}}

export default App;
