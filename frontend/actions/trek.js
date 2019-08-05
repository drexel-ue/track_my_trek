import * as TrekApiUtil from '../util/trek_api_util'

export const RECEIVE_STEPS = 'RECEIVE_STEPS'
export const RECEIVE_STEPS_ERROR = 'RECEIVE_STEPS_ERROR'
export const RECEIVE_WAYPOINTS = 'RECEIVE_WAYPOINTS'
export const RECEIVE_TREK = 'RECEIVE_TREK';

const receiveSteps = steps => ({
    type: RECEIVE_STEPS,
    steps
})
const receiveStepsError = error => ({
    type: RECEIVE_STEPS_ERROR,
    error
})
const receiveWaypoints = waypoints => ({
    type: RECEIVE_WAYPOINTS,
    waypoints
})
const receiveTrek = trek => ({
    type: RECEIVE_TREK,
    trek
})

export const setSteps = steps => dispatch => dispatch(receiveSteps(steps))
export const setErrors = error => dispatch => dispatch(receiveStepsError(error))
export const setWaypoints = waypoints => dispatch => dispatch(receiveWaypoints(waypoints))
export const saveRoute = trekData => dispatch =>
    TrekApiUtil.saveTrek(trekData).then(trek => dispatch(receiveTrek(trek)))
export const fetchTrek = id => dispatch =>
    TrekApiUtil.fetchTrek(id).then(response => (
        {
            trek: dispatch(receiveTrek(response.trek)),
            waypoints: dispatch(receiveWaypoints(response.waypoints))
        })
    )
export const fethLocation = point =>
    TrekApiUtil.fetchLocation(point).then((response) => console.log(response))