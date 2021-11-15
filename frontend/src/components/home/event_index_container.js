import {connect} from "react-redux";
import { fetchEvents } from "../../actions/event_actions";
import EventIndex from "./event_index";


const mapStateToProps = state => {
    return {
        events: Object.values(state.events.all)
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchEvents: () => dispatch(fetchEvents())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex)