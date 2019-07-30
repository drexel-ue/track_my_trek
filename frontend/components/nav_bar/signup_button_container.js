import { connect } from 'react-redux'
import { signup } from '../../actions/session';
import StartSessionButton from './start_session_button';

const msp = (state, ownProps) => ({
    type: 'signup',
    placement: ownProps.placement
})
const mdp = dispatch => ({
    handleClick: user => dispatch(signup(user))
})

export default connect(msp, mdp)(StartSessionButton)