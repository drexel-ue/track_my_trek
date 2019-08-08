import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ProspectiveFriendIndexItem from './friend_index_item'
import { sendRequest } from '../../actions/friends';

const msp = (state, ownProps) => ({
    user: ownProps.user
})
const mdp = dispatch => ({
    sendRequest: id => dispatch(sendRequest(id))
})

export default withRouter(connect(msp, mdp)(ProspectiveFriendIndexItem))