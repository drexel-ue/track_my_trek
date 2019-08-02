import { connect } from 'lodash'
import { setSteps } from '../../actions/trek_create';
import TrekCreateMap from './trek_create_map';

const msp = state => ({})
const mdp = dispatch => ({
    handleNewSteps: steps => dispatch(setSteps(steps))
})

export default connect(msp, mdp)(TrekCreateMap)