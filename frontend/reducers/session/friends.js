import { RECEIVE_REQUEST } from '../../actions/friends'
import { merge } from 'lodash'

const defaultState = {
    accepted: [],
    pending: []
}

export default (state = defaultState, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_REQUEST:
            let newState =
                { [action.request.accepted ? 'accepted' : 'pending']: [action.requestee_id] }
            return merge({}, state, newState)
        default:
            return state
    }
}