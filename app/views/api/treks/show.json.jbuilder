json.trek do
    json.partial! 'api/treks/trek', trek: @trek
end
json.waypoints do
    json.array! @waypoints, partial: 'api/waypoints/waypoint', as: :waypoint
end 
json.user do
    json.partial! 'api/users/user', user: @user
end