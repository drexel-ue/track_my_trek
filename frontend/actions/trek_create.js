export const RECEIVE_STEPS = 'RECEIVE_STEPS'
export const RECEIVE_STEPS_CREATE_ERROR = 'RECEIVE_STEPS_CREATE_ERROR'

const receiveSteps = steps => ({
    type: RECEIVE_STEPS,
    steps
})

const receiveStepsError = error => ({
    type: RECEIVE_STEPS_CREATE_ERROR,
    error
})

export const setSteps = steps => dispatch => dispatch(receiveSteps(steps))

export const setErrors = error => dispatch => dispatch(receiveStepsError(error))