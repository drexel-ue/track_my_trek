import { connect } from 'react-redux'
import { login } from '../../actions/session';
import StartSessionButton from './start_session_button';

const msp = (state, ownProps) => ({
    type: 'login',
    placement: ownProps.placement
})
const mdp = dispatch => ({
    handleClick: user => dispatch(login(user))
})

export default connect(msp, mdp)(StartSessionButton)