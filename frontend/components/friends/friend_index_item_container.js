import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ProspectiveFriendIndexItem from './friend_index_item'
import { sendRequest } from '../../actions/friends';

export const ADD_FRIEND = 'ADD_FRIEND'
export const REMOVE_FRIEND = 'REMOVE_FRIEND'
export const DISPLAY_NONE = 'DISPLAY_NONE'

const msp = (state, ownProps) => ({
    user: ownProps.user,
    type: ownProps.type
})
const mdp = dispatch => ({
    sendRequest: id => dispatch(sendRequest(id))
})

export default withRouter(connect(msp, mdp)(ProspectiveFriendIndexItem))