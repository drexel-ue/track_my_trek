import { connect } from 'react-redux'
import SessionForm from './session_form'
import { signup } from '../../actions/session';

const msp = state => ({
    type: 'signup',
    user: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        birthDay: null,
        birthMonth: null,
        birthYear: null,
        gender: null,
        country: null
    }
})
const mdp = dispatch => ({
    handleSubmit: user => dispatch(signup(user))
})

export default connect(msp, mdp)(SessionForm)