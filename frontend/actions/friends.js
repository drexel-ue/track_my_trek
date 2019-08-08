import * as FriendsApiUtil from '../util/friends_api_util'

export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export const RECEIVE_PROSPECTIVE_FRIENDS = 'RECEIVE_PROSPECTIVE_FRIENDS';
export const RECEIVE_REQUEST = 'RECEIVE_REQUEST';

const receiveFriends = friends => ({
    type: RECEIVE_FRIENDS,
    friends
})
const receiveProspectiveFriends = prospective_friends => ({
    type: RECEIVE_PROSPECTIVE_FRIENDS,
    prospective_friends
})
const receiveRequest = request => ({
    type: RECEIVE_REQUEST,
    request
})

export const fetchFriends = userId => dispatch =>
    FriendsApiUtil.fetchFriends(userId)
        .then(friends => { debugger; dispatch(receiveFriends(friends)) })

export const fetchProspectiveFriends = (userId, query_string) => dispatch =>
    FriendsApiUtil.fetchProspectiveFriends(userId, query_string)
        .then(friends => dispatch(receiveProspectiveFriends(friends)))

export const sendRequest = userId => dispatch =>
    FriendsApiUtil.sendRequest(userId)
        .then(request => dispatch(receiveRequest(request)))