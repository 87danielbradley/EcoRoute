# [EcoRoute](https://ecopool.herokuapp.com/)

## Background and Overview
Built with the MERN stack, EcoRoute addresses the age-old question of, “Where should we meet?” while also providing a tool to help people plan out a busy day of errands.  

## Functionality and MVP 
Optimizes a list of address inputs by distance/time.
Users will be able to create events where invitees can accept or decline the invitation. By providing a general meeting place, EcoRoute will be able to recommend the most equidistant location to the users attending. 


## Key Features
The Map feature at the sign up page allows users to enter their home address where they will likely be doing most of their travels from. This feature utilizes the MapBox API functionality and is showcased below: 


 
   https://user-images.githubusercontent.com/88467155/143927285-e1cfebb1-369c-4887-8908-3442583d38ac.mp4 
  
  
  
  
  
  The CRUD functionality for events allows users to create new events, which are then displayed on the homepage, update and delete events as needed.Users can optionally add attendees from their friends list to the event. This is showcased below:
  




https://user-images.githubusercontent.com/88467155/143947675-52633fec-b1a4-4478-90f6-9c0c7a12307b.mp4



## Technologies and Technical Challenges

* React/Redux
* Node
* Bcrypt for salting and hashing passwords
* MongoDB
* Express
* Mongoose to connect and interact with MongoDB
* Axios
* MapBox API

## Code Snippets
 ### Sample Frontend

    renderMap(){
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainerLogin.current,
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

            that.props.setParentState({location: e.result.geometry.coordinates})
       
        })
        geolocator.on('geolocate', function(e){

            that.props.setParentState({location: [e.coords.latitude, e.coords.longitude]}
        })
       
    }


### Sample Backend
```

router.post('/', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateEventInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors)
        }
        
        const newEvent = new Event({
            user: req.user.id,
            title: req.body.title,
            category: req.body.category,
            date: req.body.date,
            attendees: req.body.attendees,
            hidden: req.body.hidden
        });

        newEvent.save().then(event => res.json(event));
    }
)

router.get('/user/:user_id', (req, res) => {
    
    Event.find({user: req.params.user_id})
        .sort({ date: -1 })
        .then( events => res.json(events))
        .catch( err => {
            res.status(404).json({ eventsnotfound: 'This user has not created an event'})
        })

});

```


  
 
## Group Members and Work Breakdown
* Sydney Parsons - Backend/Flex
* Daniel Bradley - Backend
* Tyler Koh - Frontend
* Mickey Addai - Frontend/Flex
