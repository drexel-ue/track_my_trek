import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NavBar from './nav_bar'

const msp = ({ session }) => ({
    loggedIn: session.userId
})
const mdp = dispatch => ({})

export default withRouter(connect(msp, mdp)(NavBar))