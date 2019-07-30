import { connect } from 'react-redux'
import { login } from '../../actions/session';
import StartSessionButton from './start_session_button';

const msp = (state, ownProps) => ({
    type: 'login',
    placement: ownProps.placement
})
const mdp = dispatch => ({
})

export default connect(msp, mdp)(StartSessionButton)