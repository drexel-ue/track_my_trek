import { RECEIVE_WAYPOINTS } from '../actions/trek'
import { merge } from 'lodash'

export default (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_WAYPOINTS:
            return merge([], action.waypoints)
        default:
            return state
    }
}