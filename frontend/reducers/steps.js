import { merge } from 'lodash'
import { RECEIVE_CREATE_STEPS } from '../actions/trek_create'

export default (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CREATE_STEPS:
            return merge({}, action.steps)
        default:
            return state
    }
}