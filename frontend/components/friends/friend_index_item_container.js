import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import FriendIndexItem from './friend_index_item'
import { sendRequest, acceptRequest } from '../../actions/friends';

export const ADD_FRIEND = 'ADD_FRIEND'
export const UNFRIEND = 'UNFRIEND'
export const DISPLAY_NONE = 'DISPLAY_NONE'
export const RECEIVED = 'RECEIVED'
export const SENT = 'SENT'

const msp = (state, ownProps) => ({
    user: ownProps.user,
    type: ownProps.type,
    requestId: ownProps.requestId
})
const mdp = dispatch => ({
    action: (type, userId, requestId) => {
        if (type == ADD_FRIEND) {
            return dispatch(sendRequest(userId))
        } else if (type == RECEIVED) {
            return dispatch(acceptRequest(requestId))
        }
    }
})

export default withRouter(connect(msp, mdp)(FriendIndexItem))