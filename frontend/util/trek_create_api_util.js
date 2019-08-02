export const saveRoute = waypoints => {
    debugger
    $.ajax({
        url: 'api/waypoints',
        method: 'post',
        data: { waypoints }
    })
}