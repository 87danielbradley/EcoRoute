/* eslint import/no-webpack-loader-syntax: off */

import React from 'react';
import mapboxgl from '!mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import './mapbox.css'
import EventIndexContainer from '../home/event_index'
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

    toggleSidebar = (id) => {

        const elem = document.getElementById(id);
        // Add or remove the 'collapsed' CSS class from the sidebar element.
        // Returns boolean "true" or "false" whether 'collapsed' is in the class list.
        const collapsed = elem.classList.toggle('collapsed');
        const padding = {};
        // 'id' is 'right' or 'left'. When run at start, this object looks like: '{left: 300}';
        padding[id] = collapsed ? 0 : 300; // 0 if collapsed, 300 px if not. This matches the width of the sidebars in the .sidebar CSS class.
        // Use `map.easeTo()` with a padding option to adjust the map's center accounting for the position of sidebars.
        // // debugger
        // this.state.map.easeTo({
        //     padding: padding,
        //     duration: 1000 // In ms. This matches the CSS transition duration property.
        // });
    }

    render(){

        return (
            <div>
                <div id="map" ref={this.mapContainer} className="map-container">
                <div id="left" class="sidebar flex-center left collapsed">
        <div class="sidebar-content rounded-rect flex-center">
            <EventIndexContainer />
            <div class="sidebar-toggle rounded-rect left" onClick={() => this.toggleSidebar('left')}>
                &rarr;
            </div>
        </div>
    </div>
 <div id="right" class="sidebar flex-center right collapsed">
        <div class="sidebar-content rounded-rect flex-center">
            Right Sidebar
            <div class="sidebar-toggle rounded-rect right" onClick={() => this.toggleSidebar('right')}>
                &larr;
            </div>
        </div>
    </div>
                </div>
            </div>
        );
    }
}

