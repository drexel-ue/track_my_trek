export const fetchFriends = userId => $.ajax({
    url: `api/users/${userId}`,
    method: 'get',
    data: { friends_of: userId }
})

export const fetchProspectiveFriends = (userId, query_string) => $.ajax({
    url: `api/users/${userId}`,
    method: 'get',
    data: { query_string }
})

export const sendRequest = userId => $.ajax({
    url: `api/friend_requests`,
    method: 'post',
    data: { userId }
})

export const acceptRequest = requestId => $.ajax({
    url: `api/friend_requests/${requestId}`,
    method: 'patch'
})