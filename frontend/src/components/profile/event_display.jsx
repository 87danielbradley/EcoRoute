// will go in event folder
const EventDisplay = ({ event }) => {
    return (
        <div>
            <h1>{ event.title }</h1>
            <div>{ event.description }</div>
            <div>{ event.date }</div>
            <div>{ event.user.username }</div>
        </div>
    )
}

export default EventDisplay