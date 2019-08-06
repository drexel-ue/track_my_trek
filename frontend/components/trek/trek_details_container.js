import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { saveRoute } from '../../actions/trek'
import { fetchLocation } from '../../util/trek_api_util';
import TrekDetails from './trek_create_details'

const msp = ({ entities }) => ({
    waypoints: entities.waypoints,
    points: entities.points
})
const mdp = dispatch => ({
    saveRoute: waypoints => dispatch(saveRoute(waypoints)),
    fetchLocation: point => fetchLocation(point)
})

export default withRouter(connect(msp, mdp)(TrekDetails))