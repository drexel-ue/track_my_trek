import * as FriendsApiUtil from '../util/friends_api_util'

export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export const RECEIVE_PROSPECTIVE_FRIENDS = 'RECEIVE_PROSPECTIVE_FRIENDS';

const receiveFriends = friends => ({
    type: RECEIVE_FRIENDS,
    friends
})
const receiveProspectiveFriends = prospective_friends => ({
    type: RECEIVE_PROSPECTIVE_FRIENDS,
    prospective_friends
})

export const fetchFriends = userId => dispatch =>
    FriendsApiUtil.fetchFriends(userId)
        .then(friends => { debugger; dispatch(receiveFriends(friends)) })

export const fetchProspectiveFriends = (userId, query_string) => dispatch =>
    FriendsApiUtil.fetchProspectiveFriends(userId, query_string)
        .then(friends => dispatch(receiveProspectiveFriends(friends)))

export const sendRequest = userId =>
    FriendsApiUtil.sendRequest(userId)
        // .then(request => { debugger })