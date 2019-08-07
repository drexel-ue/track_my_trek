import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import UserNav from './user_nav'

const msp = ({ session }) => ({
    userId: session.userId
})
const mdp = dispatch => ({})

export default withRouter(connect(msp, mdp)(UserNav))