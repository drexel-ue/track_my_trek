import { connect } from 'react-redux'
import SessionForm from './session_form'
import { signup } from '../../actions/session';

const msp = () => ({
    type: 'signup',
    user: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        birthDay: 'Day',
        birthMonth: 'Month',
        birthYear: 'Year',
        gender: undefined,
        country: 'United States'
    }
})
const mdp = dispatch => ({
    handleSubmit: user => dispatch(signup(user))
})

export default connect(msp, mdp)(SessionForm)