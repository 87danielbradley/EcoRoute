/* eslint import/no-webpack-loader-syntax: off */

import React from 'react';
import mapboxgl from '!mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import './mapbox.css'
// import accessToken from require('./config/keys').mapbox;
mapboxgl.accessToken = "pk.eyJ1IjoiODdkYW5pZWxicmFkbGV5IiwiYSI6ImNrYXRwMHhseDBzd28zMHBiaXg5MTFzZDMifQ.IiD55RpwRZLXQxddLXVxEw"

export default class MapboxView extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            lng: -73.906020,
            lat: 40.745540,
            zoom: 10
        };
        this.mapContainer = React.createRef();
    }
    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    }
    render(){
        return (
            <div>
                <div ref={this.mapContainer} className="map-container" />
            </div>
        );
    }
}

