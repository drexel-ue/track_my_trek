import { connect } from 'react-redux'
import ProspectiveFriendsSearch from './prospective_friends_search'
import { fetchProspectiveFriends } from '../../actions/friends';

const msp = ({ session, entities }) => {
    let results =
        Object.values(entities.users)
            .filter(user =>
                user.id != session.userId
                && !session.friends.accepted.includes(user.id)
                && !session.friends.pending.includes(user.id)
            )
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