import { connect } from 'react-redux'
import ProspectiveFriendsSearch from './prospective_friends_search'
import { fetchProspectiveFriends } from '../../actions/friends';

const msp = ({ session }) => ({
    userId: session.userId,
    showError: false,
    query_string: '',
    friends: []
})
const mdp = dispatch => ({
    fetchProspectiveFriends: (userId, query_string) =>
        dispatch(fetchProspectiveFriends(userId, query_string))
})

export default connect(msp, mdp)(ProspectiveFriendsSearch)