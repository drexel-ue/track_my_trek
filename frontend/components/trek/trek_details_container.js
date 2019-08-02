import { connect } from 'react-redux'
import { saveRoute } from '../../actions/trek_create'
import TrekDetails from './trek_create_details';

const msp = ({ entities }) => ({
    waypoints: entities.waypoints
})
const mdp = dispatch => ({
    saveRoute: waypoints => dispatch(saveRoute(waypoints))
})

export default connect(msp, mdp)(TrekDetails)