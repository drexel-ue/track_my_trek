import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import FriendsShow from './friends_index'

const msp = state => ({})
const mdp = dispatch => ({})

export default withRouter(connect(msp, mdp)(FriendsShow))