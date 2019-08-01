import { connect } from 'react-redux'
import NavBar from './nav_bar'

const msp = ({ session }) => ({
    loggedIn: session.userId
})
const mdp = dispatch => ({})

export default connect(msp, mdp)(NavBar)