/* eslint import/no-webpack-loader-syntax: off */

import React from 'react';
import mapboxgl from '!mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import './mapbox.css'
import EventIndexContainer from '../home/event_index'
import FriendsIndexContainer from "../friends/friends_index_container"
import MessageContainer from "../messages/messages_container"
// require("dotenv").config();

const accessToken = process.env.REACT_APP_MAPBOX; 
// const accessToken = require('../../config/keys').mapbox;
mapboxgl.accessToken = accessToken


export default class MapboxView extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            lng: -73.906021,
            eventId: this.props.events[0]._id,
            lat: 40.745541,
            zoom: 14,
            initialized: false

            
        };
        this.mapContainer = React.createRef();
        this.updateMap = this.updateMap.bind(this);
        
    }
    componentDidMount() {
        this.renderMap()
        this.props.getPlaces( 'starbucks',[this.state.lng,this.state.lat])
    }
     render(){
       
        return (
            <div>
                <div id="map" ref={this.mapContainer} className="map-container">
                    <div id="left" className="sidebar flex-center left">
                        <div className="sidebar-content rounded-rect flex-center">
                            <EventIndexContainer updateMap={(index)=> this.updateMap(index)} events={this.props.events} />
                            <div className="sidebar-toggle rounded-rect left" onClick={() => this.toggleSidebar('left')}>
                                 &#10513;
                            </div>
                        </div>
                    </div>
                    <div id="upper" className="sidebar sidebar-upper flex-upper upper collapsed">
                        <div className="sidebar-content rounded-rect flex-upper">
                            <FriendsIndexContainer />
                            <div className="sidebar-toggle-upper rounded-rect upper" onClick={() => this.toggleSidebar('upper')}>
                                &#x263B;
                                
                            </div>
                            <div id="create-friend" className="sidebar-toggle-upper rounded-rect upper" onClick={() => this.toggleSidebar('upper')}>
                                &#x2B;
                                
                            </div>
                        </div>
                    </div>
                    <div id="lower" className="sidebar-lower flex-lower lower collapsed collapsed-lower">
                        <div className="sidebar-content rounded-rect flex-center message">
                
                            {/* <input id="temp-input" type="text"></input> */}
                            <div id="chat-box">
                                <MessageContainer eventId={this.state.eventId}/>
                            </div>
                            <div className="sidebar-toggle-lower rounded-rect lower" onClick={() => this.toggleSidebar('lower')}>
                                &#x270D;
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    updateMap(eventIndex=0) {
        this.setState({eventId: this.props.events[eventIndex]._id})

        this.renderMap(eventIndex);
    }

    renderMap(eventIndex=0){
        let attendees = this.props.events[eventIndex].attendees;
        let lng = attendees.reduce((total, next) => total + next.location[0],0)/attendees.length;
        let lat = attendees.reduce((total, next) => total + next.location[1],0)/attendees.length;

        
        
        // const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            // style: 'mapbox://styles/mapbox/dark-v10',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: 10
        });
        map.flyTo([lng,lat])
        // map.setCenter([lng,lat])
        console.log([lng,lat])
        console.log(eventIndex)
        if (this.props.events.length > 0){
            
            const featuresArray = []
            this.props.events[eventIndex].attendees.map((attendee,i) => {
                    featuresArray.push({type: 'Feature', 
                                        geometry: {
                                            type: 'Point',
                                            coordinates: attendee.location
                                            }
                                        }) 
                                    })

            const friends = {
                type: "FeatureCollection",
                features: featuresArray
            };
           

            

            map.on('load', () => {
                map.addSource('attendees', { type: 'geojson', data: friends})
                map.addLayer({
                    id: `${this.props.eventType}`,
                    type: 'circle',
                    source: 'attendees',
                    
                    paint: {
                        "circle-radius": 5,
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

        } 
    }

    toggleSidebar = (id) => {

        const elem = document.getElementById(id);
        // Add or remove the 'collapsed' CSS class from the sidebar element.
        // Returns boolean "true" or "false" whether 'collapsed' is in the class list.
        const collapsed = elem.classList.toggle('collapsed');
        const padding = {};
        // 'id' is 'right' or 'left'. When run at start, this object looks like: '{left: 300}';
        padding[id] = !collapsed ? 300 : 0; // 0 if collapsed, 300 px if not. This matches the width of the sidebars in the .sidebar CSS class.
        // Use `map.easeTo()` with a padding option to adjust the map's center accounting for the position of sidebars.
        // 
        // this.state.map.easeTo({
        //     padding: padding,
        //     duration: 1000 // In ms. This matches the CSS transition duration property.
        // });
    }
    toggleMessagebar = (id) => {

        const elem = document.getElementById(id);
        // Add or remove the 'collapsed' CSS class from the sidebar element.
        // Returns boolean "true" or "false" whether 'collapsed' is in the class list.
        const collapsed = elem.classList.toggle('collapsed-lower');
        const padding = {};
        // 'id' is 'right' or 'left'. When run at start, this object looks like: '{left: 300}';
        padding[id] = !collapsed ? 500 : 0; // 0 if collapsed, 300 px if not. This matches the width of the sidebars in the .sidebar CSS class.
        // Use `map.easeTo()` with a padding option to adjust the map's center accounting for the position of sidebars.
        // 
        // this.state.map.easeTo({
        //     padding: padding,
        //     duration: 1000 // In ms. This matches the CSS transition duration property.
        // });
    }


    
     
            
           
     

}

