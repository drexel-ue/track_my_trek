import * as FriendsApiUtil from '../util/friends_api_util'

export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export const RECEIVE_PROSPECTIVE_FRIENDS = 'RECEIVE_PROSPECTIVE_FRIENDS';
export const RECEIVE_REQUEST = 'RECEIVE_REQUEST';
export const DELETE_REQUEST = 'DELETE_REQUEST';

const receiveFriends = ({ users, accepted, pending }) => ({
    type: RECEIVE_FRIENDS,
    users,
    accepted,
    pending
})
const receiveProspectiveFriends = ({ users }) => ({
    type: RECEIVE_PROSPECTIVE_FRIENDS,
    users
})
const receiveRequest = request => ({
    type: RECEIVE_REQUEST,
    request
})
const deleteRequest = requestId => ({
    type: DELETE_REQUEST,
    requestId
})

export const fetchFriends = userId => dispatch =>
    FriendsApiUtil.fetchFriends(userId)
        .then(payload => dispatch(receiveFriends(payload)))

export const fetchProspectiveFriends = (userId, query_string) => dispatch =>
    FriendsApiUtil.fetchProspectiveFriends(userId, query_string)
        .then(friends => dispatch(receiveProspectiveFriends(friends)))

export const sendRequest = userId => dispatch =>
    FriendsApiUtil.sendRequest(userId)
        .then(request => dispatch(receiveRequest(request)))

export const acceptRequest = requestId => dispatch =>
    FriendsApiUtil.acceptRequest(requestId)
        .then(request => dispatch(receiveRequest(request)))

export const unfriend = requestId => dispatch =>
    FriendsApiUtil.unfriend(requestId)
        .then(() => dispatch(deleteRequest(requestId)))