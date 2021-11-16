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
                            `{"type": "Feature",${attendee.location},"properties": {'id':"${attendee.id}"}}`
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

            //attempt to add user image
            // for (const marker of friends.features){
            //     const container = document.createElement('div');
            //     container.className = 'marker';
            //     container.style.backgroundImage = `${this.props.events[0].attendees[marker.properties.id]}`
    
            //     container.style.width = '5vw';
            //     container.style.height = '5vw';
            //     container.style.backgroundSize = '100%';
            //     new mapboxgl.Marker(container)
            //         .setLngLat(marker.geometry.coordinates)
            //         .addTo(map);
            // }

            //attempt to add user image
            // for (const marker of friends.features){
                //      const svgCircle = document.createElementNS("http://www.w3.org/2000/svg","circle")
                //     svgCircle.style.width = '5vw';
                //     svgCircle.style.height = '5vw';
                //      svgCircle.setAttribute()

            //     const svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            //      svgEl.appendChild(svgCircle)
            //     svgEl.className = 'marker';
            //      setAttributeNS..setAttribute("r", "5")
            //     svgEl.style.width = '5vw';
            //     svgEl.style.height = '5vw';
            //     
            //     new mapboxgl.Marker(svgEl)
            //         .setLngLat(marker.geometry.coordinates)
            //         .addTo(map);
            // }





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

