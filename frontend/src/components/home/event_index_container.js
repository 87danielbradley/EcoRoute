import {connect} from "react-redux";
import EventIndex from "./event_index";


const mapStateToProps = state => {
    return {
        events: Object.values(state.entities.events)
    }
}


const mapDispatchToProps = dispatch => ({
    // fetchEvents: () => dispatch(fetchEvents())
})


export default connect(mapStateToProps,mapDispatchToProps)(EventIndex)