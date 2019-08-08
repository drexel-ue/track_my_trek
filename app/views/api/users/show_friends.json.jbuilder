json.users do
    json.array! @friends, partial: 'api/users/user', as: :user
end
json.accepted do
    json.array! @accepted, partial: 'api/friend_requests/request', as: :request
end
json.pending do
    json.array! @pending, partial: 'api/friend_requests/request', as: :request
end
