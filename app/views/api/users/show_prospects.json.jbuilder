json.users do
    json.array! @friends, partial: 'api/users/user', as: :user
end