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
        birthDay: undefined,
        birthMonth: undefined,
        birthYear: undefined,
        gender: undefined,
        country: undefined
    }
})
const mdp = dispatch => ({
    handleSubmit: user => dispatch(signup(user))
})

export default connect(msp, mdp)(SessionForm)