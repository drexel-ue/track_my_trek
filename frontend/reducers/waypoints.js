import { RECEIVE_CREATE_WAYPOINTS } from '../actions/trek_create'
import { merge } from 'lodash'

export default (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CREATE_WAYPOINTS:
            return merge([], action.waypoints)
        default:
            return state
    }
}