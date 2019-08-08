import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import FriendsIndex from './friends_index'

const msp = () => ({
    friends: []
})
const mdp = dispatch => ({})

export default withRouter(connect(msp, mdp)(FriendsIndex))