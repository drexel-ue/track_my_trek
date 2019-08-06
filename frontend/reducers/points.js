import { RECEIVE_POINTS } from '../actions/trek'
import { merge } from 'lodash'

export default (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_POINTS:
            return merge([], action.points)
        default:
            return state
    }
}