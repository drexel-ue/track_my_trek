import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchFriends } from '../../actions/friends'
import FriendsIndex from './friends_index'

const msp = ({ session, entities }) => {
    const accepted = Object.values(entities.users).filter(user =>
        session.friends.accepted.includes(user.id)
    )
    return ({
        userId: session.userId,
        friendCount: accepted.length,
        accepted: accepted,
        pending: Object.values(entities.users).filter(user =>
            session.friends.pending.includes(user.id)
        )
    })
}
const mdp = dispatch => ({
    fetchFriends: userId => dispatch(fetchFriends(userId))
})

export default withRouter(connect(msp, mdp)(FriendsIndex))