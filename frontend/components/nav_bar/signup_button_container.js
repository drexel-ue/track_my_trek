import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { signup } from '../../actions/session';
import StartSessionButton from './start_session_button';

const msp = (state, ownProps) => ({
    type: 'signup',
    placement: ownProps.placement
})
const mdp = dispatch => ({
})

export default withRouter(connect(msp, mdp)(StartSessionButton))