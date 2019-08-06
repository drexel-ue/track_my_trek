json.trek do
    json.partial! 'api/treks/trek', trek: @trek
end
json.waypoints do
    json.array! @waypoints, partial: 'api/waypoints/waypoint', as: :waypoint
end 
json.points do
    json.array! @points, partial: 'api/points/point', as: :point
end 
json.user do
    json.partial! 'api/users/user', user: @user
end