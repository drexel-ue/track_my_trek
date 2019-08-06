import { connect } from 'react-redux'
import { setSteps, setErrors, setWaypoints, setPoints } from '../../actions/trek';
import TrekCreateMap from './trek_create_map';

const msp = state => ({})
const mdp = dispatch => ({
    handleNewSteps: steps => dispatch(setSteps(steps)),
    handleErrors: errors => dispatch(setErrors(errors)),
    setWaypoints: waypoints => dispatch(setWaypoints(waypoints)),
    setPoints: waypoints => dispatch(setPoints(waypoints))
})

export default connect(msp, mdp)(TrekCreateMap)