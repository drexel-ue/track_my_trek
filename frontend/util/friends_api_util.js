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

