import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { saveRoute } from '../../actions/trek'
import TrekDetails from './trek_create_details'

const msp = ({ entities }) => ({
    waypoints: entities.waypoints
})
const mdp = dispatch => ({
    saveRoute: waypoints => dispatch(saveRoute(waypoints))
})

export default withRouter(connect(msp, mdp)(TrekDetails))