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
            lng: -73.876549,
          
            lat: 40.733959,
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
                <div ref={this.mapContainer} className="map-container" >
                    <div id="left-sidebar" className="left-sidebar"></div>
                    <div id="right-sidebar"className="right-sidebar"></div>
                </div>
            </div>
        );
    }

    renderMap(){
        debugger
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            // style: 'mapbox://styles/mapbox/dark-v10',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: 14
        });
        if (this.props.events.length > 0){
            debugger
            const featuresArray = []
            this.props.events[0].attendees.map((attendee,i) => {
                    featuresArray.push({type: 'Feature', geometry: `${attendee.geometry}`, properties: {id: `${attendee.id}`}})
                    }) 
            const friends = {
                "type": "FeatureCollection",
                "features": featuresArray
            };
            debugger

            

            map.on('load', () => {
                map.addSource('attendees', { type: 'geojson', data: friends})
                map.addLayer({
                    id: `${this.props.eventType}`,
                    type: 'circle',
                    source: 'attendees',
                    
                    paint: {
                        "circle-radius": 500000,
                        "circle-color": "#5b94c6",
                        "circle-opacity": 1
                    }
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





        } else {
            debugger
        }
    }
}

