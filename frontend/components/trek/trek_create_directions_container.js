import { connect } from 'react-redux'
import RouteDirections from './trek_create_directions';

const msp = ({ entities }) => ({
    steps: entities.steps
})
const mdp = dispatch => ({})

export default connect(msp, mdp)(RouteDirections)