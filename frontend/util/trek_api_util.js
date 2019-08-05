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

export const fetchLocation = data => {
    const point = `${data.lat},${data.lng}`
    return $.ajax({
        url: `https://graphhopper.com/api/1/geocode?reverse=true&point=${point}&locale=en&debug=true&key=712bf675-0c2c-4c45-9e79-c6b2731f54ad`,
        method: 'get'
    })
}