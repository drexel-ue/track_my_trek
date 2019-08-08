json.users do
    json.array! @friends, partial: 'api/users/user', as: :user
end
json.requests do
    json.array! @requests, partial: 'api/friend_requests/request', as: :request
end