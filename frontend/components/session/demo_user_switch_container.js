import { connect } from 'react-redux'
import { login } from '../../actions/session'
import DemoUserSwitch from './demo_user_switch'

const msp = _ => ({
    user1: {
        username: 'trek@tracker.com',
        password: 'test123'
    },
    user2: {
        username: 'track@trecker.com',
        password: 'test123'
    }
})
const mdp = dispatch => ({
    login: user => dispatch(login(user))
})

export default connect(msp, mdp)(DemoUserSwitch)

