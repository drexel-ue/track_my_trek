export const saveTrek = trekData => {

    return $.ajax({
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
}