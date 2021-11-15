import React from 'react';
import { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchUserTweets } from '../../actions/tweet_actions';
// import EventDisplay from '../events/event_display';

export const Profile = ({ currentUser, events, fetchUserEvents }) => { // friends
      // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        fetchUserEvents(currentUser.id);
    }, [fetchUserEvents, currentUser]);

    if (events.length === 0) return <div>No upcoming events!</div>;

    return (
        <div>
            <h2>Hi {currentUser.username} - here's what you got going on!</h2>
            {/* {events.map(event => <EventDisplay key={event._id} event={event} />)} */}
        </div>
    )
    }

const mapStateToProps = (state) => ({
    tweets: Object.values(state.events.user),
    currentUser: state.session.user
})

const mapDispatchToProps = {
    fetchUserEvents
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
