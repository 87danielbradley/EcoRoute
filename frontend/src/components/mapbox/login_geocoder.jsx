/* eslint import/no-webpack-loader-syntax: off */

import React from 'react';
import mapboxgl from '!mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'mapbox-gl/dist/mapbox-gl.css'
import './mapbox.css'
const accessToken = require('../../config/keys').mapbox;
mapboxgl.accessToken = accessToken

export default class LoginGeocoder extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            lng: -77.10853099823,
          
            lat: 38.880100922392,
            zoom: 1

            
        };
        this.mapContainer = React.createRef();
    }
    componentDidMount() {
        this.renderMap()
        
    }
    render(){
        return (
            <div>
                <div ref={this.mapContainer} className="map-container" />
            </div>
        );
    }

    renderMap(){
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [lng, lat],
            zoom: zoom,
            bearing: 0
        });
        const geocoder = new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                flyTo:{
                    bearing: (Math.random() < 0.5 ? -1 : 1)*Math.floor(Math.random() * 20),
                    speed: 2,
                    curve: 0.75,
                    pitch: 60,
                    essential: true
                    
                },
                mapboxgl: mapboxgl,
                className: "geocoder"
            })
            const geolocator= new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: false
                },
                trackUserLocation: true,
                className: "geolocator"
            })
        map.addControl(
            geocoder, 'top-left'
            )
        map.addControl(
            geolocator
        )
        let that = this;
        geocoder.on('result', function(e) {
           
            console.log(e.result.geometry)

            that.props.setParentState({location: e.result.geometry.coordinates})
            // that.props.setParentState({"geometry": JSON.parse(geocoder.lastSelected).geometry})
            // this.props.setState{"geometry": JSON.parse(geocoder.lastSelected).geometry}
        })
        geolocator.on('geolocate', function(e) {
            
            console.log(e.coords.latitude)
            console.log(e.coords.longitude)
            

            that.props.setParentState({location: [e.coords.latitude, e.coords.longitude]})
            // that.props.setParentState({"geometry": JSON.parse(geocoder.lastSelected).geometry})
            // this.props.setState{"geometry": JSON.parse(geocoder.lastSelected).geometry}
        })
       
    }
}

