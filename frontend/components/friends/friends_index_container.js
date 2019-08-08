import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchFriends } from '../../actions/friends'
import FriendsIndex from './friends_index'

const msp = ({ session, entities }) => ({
    userId: session.userId,
    friendCount: 0,
    accepted: Object.values(entities.users).filter(user =>
        session.accepted.includes(user.id)
    ),
    pending: Object.values(entities.users).filter(user =>
        session.pending.includes(user.id)
    )
})
const mdp = dispatch => ({
    fetchFriends: userId => dispatch(fetchFriends(userId))
})

export default withRouter(connect(msp, mdp)(FriendsIndex))