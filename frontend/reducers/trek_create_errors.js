import { RECEIVE_STEPS_ERROR } from '../actions/trek'
import { merge } from 'lodash'

export default (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_STEPS_ERROR:
            return merge({}, state, action.error)
        default:
            return state
    }
}