import { connect } from 'react-redux'
import ProspectiveFriendsSearch from './prospective_friends_search'
import { fetchProspectiveFriends } from '../../actions/friends';

const msp = ({ session, entities }) => {
    let results =
        Object.values(entities.users)
            .filter(user =>
                user.id != session.userId
                && !Object.values(session.friends.accepted)
                    .some(request => request.requester_id == user.id || request.requestee_id == user.id)
                && !Object.values(session.friends.pending)
                    .some(request => request.requester_id == user.id || request.requestee_id == user.id))
    return ({
        userId: session.userId,
        showError: false,
        query_string: '',
        results
    })
}
const mdp = dispatch => ({
    fetchProspectiveFriends: (userId, query_string) =>
        dispatch(fetchProspectiveFriends(userId, query_string))
})

export default connect(msp, mdp)(ProspectiveFriendsSearch)