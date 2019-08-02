import * as TrekCreateApiUtil from '../util/trek_create_api_util'

export const RECEIVE_CREATE_STEPS = 'RECEIVE_STEPS'
export const RECEIVE_STEPS_CREATE_ERROR = 'RECEIVE_STEPS_CREATE_ERROR'
export const RECEIVE_CREATE_WAYPOINTS = 'RECEIVE_CREATE_WAYPOINTS'

const receiveSteps = steps => ({
    type: RECEIVE_CREATE_STEPS,
    steps
})
const receiveStepsError = error => ({
    type: RECEIVE_STEPS_CREATE_ERROR,
    error
})
const receiveWaypoints = waypoints => ({
    type: RECEIVE_CREATE_WAYPOINTS,
    waypoints
})

export const setSteps = steps => dispatch => dispatch(receiveSteps(steps))
export const setErrors = error => dispatch => dispatch(receiveStepsError(error))
export const setWaypoints = waypoints => dispatch => dispatch(receiveWaypoints(waypoints))
export const saveRoute = waypoints => dispatch => {
    debugger
    TrekCreateApiUtil.saveRoute(waypoints).then(() => dispatch(receiveSteps()))
}