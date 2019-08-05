export const saveTrek = trekData => $.ajax({
    url: 'api/treks',
    method: 'post',
    data: {
        trek: {
            map_name: trekData.mapName,
            activity: trekData.activity
        },
        waypoints: trekData.waypoints
    }
})

export const fetchTrek = id => $.ajax({
    url: `api/treks/${id}`,
    method: 'get'
})