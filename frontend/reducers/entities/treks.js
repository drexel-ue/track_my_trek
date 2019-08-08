import { RECEIVE_TREK } from '../../actions/trek'
import { merge } from 'lodash'

export default (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_TREK:
            return merge({}, state, { [action.trek.id]: action.trek })
        default:
            return state
    }
}