import { connect } from 'react-redux'
import SessionForm from './session_form'
import { login } from '../../actions/session';

const msp = () => ({
    type: 'login',
    user: {
        username: '',
        password: ''
    }
})
const mdp = dispatch => ({
    handleSubmit: user => dispatch(login(user))
})

export default connect(msp, mdp)(SessionForm)