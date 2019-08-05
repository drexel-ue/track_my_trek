json.trek do
    json.partial! 'api/treks/trek', trek: @trek
end
json.waypoints do
    json.array! @waypoints, partial: 'api/waypoints/waypoint', as: :waypoint
end 