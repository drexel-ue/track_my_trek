import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchFriends } from '../../actions/friends'
import FriendsIndex from './friends_index'

const msp = ({ session, entities }) => {
    const users = Object.values(entities.users)
    const accepted = users.filter(user =>
        (session.friends.accepted.some(request => request.requester_id == user.id)
            || session.friends.accepted.some(request => request.requestee_id == user.id))
        && user.id != session.userId
    )
    const pendings = users.filter(user => !accepted.includes(user) && user.id != session.userId)
    const requestMap = {}
    pendings.forEach(user => {
        requestMap[user.id] = session.friends.pending.find(request =>
            request.requester_id == user.id
            || request.requestee_id == user.id
        )
    })

    return ({
        userId: session.userId,
        friendCount: accepted.length,
        accepted: accepted,
        pending: pendings,
        requestMap
    })
}
const mdp = dispatch => ({
    fetchFriends: userId => dispatch(fetchFriends(userId))
})

export default withRouter(connect(msp, mdp)(FriendsIndex))