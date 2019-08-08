import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchFriends } from '../../actions/friends'
import FriendsIndex from './friends_index'

const msp = ({ session, entities }) => {
    const accepted = Object.values(entities.users).filter(user =>
        (session.friends.accepted.some(request => request.requester_id == user.id)
            || session.friends.accepted.some(request => request.requestee_id == user.id))
        && user.id != session.userId
    )
    return ({
        userId: session.userId,
        friendCount: accepted.length,
        accepted: accepted,
        pending: Object.values(entities.users).filter(user =>
            (session.friends.pending.some(request => request.requester_id == user.id)
                || session.friends.pending.some(request => request.requestee_id == user.id))
            && user.id != session.userId
        )
    })
}
const mdp = dispatch => ({
    fetchFriends: userId => dispatch(fetchFriends(userId))
})

export default withRouter(connect(msp, mdp)(FriendsIndex))