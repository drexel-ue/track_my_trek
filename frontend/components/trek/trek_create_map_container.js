import { connect } from 'react-redux'
import { setSteps, setErrors } from '../../actions/trek_create';
import TrekCreateMap from './trek_create_map';

const msp = state => ({})
const mdp = dispatch => ({
    handleNewSteps: steps => dispatch(setSteps(steps)),
    handleErrors: errors => dispatch(setErrors(errors))
})

export default connect(msp, mdp)(TrekCreateMap)