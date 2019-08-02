export const RECEIVE_STEPS = 'RECEIVE_STEPS'

const receiveSteps = steps => ({
    type: RECEIVE_STEPS,
    steps
})

export const setSteps = steps => dispatch => dispatch(receiveSteps(steps))