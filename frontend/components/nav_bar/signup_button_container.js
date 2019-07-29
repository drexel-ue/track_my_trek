import { connect } from 'react-redux'
import { signup } from '../../actions/session';
import StartSessionButton from './start_session_button';

const msp = () => ({
    type: 'signup'
})
const mdp = dispatch => ({
    handleClick: user => dispatch(signup(user))
})

export default connect(msp, mdp)(StartSessionButton)