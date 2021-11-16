/* eslint import/no-webpack-loader-syntax: off */

import React from 'react';
import mapboxgl from '!mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import './mapbox.css'
const accessToken = require('../../config/keys').mapbox;
mapboxgl.accessToken = accessToken

export default class MapboxView extends React.PureComponent{
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
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [lng, lat],
            zoom: zoom
        });
        if (this.props.events.length > 0){
            const friends = {
                "type": "FeatureCollection",
                "features": [
                    this.props.events[0].attendees.map(attendee => {
                        return (
                            `{"type": "Feature",${attendee.location},"properties": {}}`
                        )
                    })  
                ]
            };


            map.on('load', () => {
                map.addLayer({
                    id: `${this.props.eventType}`,
                    type: 'circle',
                    source: { type: 'geojson', data: friends}
                });
            });
        }
    }
    render(){
        return (
            <div>
                <div ref={this.mapContainer} className="map-container" />
            </div>
        );
    }
}

