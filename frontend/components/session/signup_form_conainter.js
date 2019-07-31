import { connect } from 'react-redux'
import SessionForm from './session_form'
import { signup } from '../../actions/session';

const msp = () => ({
    type: 'signup',
    user: {
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        birth_day: 'Day',
        birth_month: 'Month',
        birth_year: 'Year',
        gender: 'Male',
        subscribed: false,
        country: 'United States'
    }
})
const mdp = dispatch => ({
    handleSubmit: user => dispatch(signup(user))
})

export default connect(msp, mdp)(SessionForm)