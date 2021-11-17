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
            zoom: 10

            
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
            zoom: zoom
        });
        const geocoder = new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                flyTo:{
                    bearing: 27,
                    speed: 2,
                    curve: 0.75,
                    pitch: 20,
                    essential: true
                    
                },
                mapboxgl: mapboxgl
            })
        map.addControl(
            geocoder, 'top-left'
        )
        let that = this;
        geocoder.on('result', function(e) {
            // debugger
            console.log(e.result.geometry)

            that.props.setParentState({location: e.result.geometry.coordinates})
            // that.props.setParentState({"geometry": JSON.parse(geocoder.lastSelected).geometry})
            // this.props.setState{"geometry": JSON.parse(geocoder.lastSelected).geometry}
        })
       
    }
}

