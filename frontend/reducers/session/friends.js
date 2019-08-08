import { RECEIVE_REQUEST, RECEIVE_FRIENDS } from '../../actions/friends'
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
                { [action.request.accepted ? 'accepted' : 'pending']: [action.request.requestee_id] }
            return merge({}, state, newState)
        case RECEIVE_FRIENDS:
            let requests = {
                accepted: action.accepted,
                pending: action.pending
            }
            return merge({}, state, requests)
        default:
            return state
    }
}