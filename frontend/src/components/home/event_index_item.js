import React from "react";


export const EventIndexItem = (props) => {
    const {event} = props;

    return (
        <div>

            <div>
            {event.title}

            </div>
            {event.category}
        </div>
    )



}