import { RECEIVE_REQUEST, RECEIVE_FRIENDS, DELETE_REQUEST } from '../../actions/friends'
import { merge } from 'lodash'

const defaultState = {
    accepted: {},
    pending: {}
}

export default (state = defaultState, action) => {
    Object.freeze(state)
    let newState
    switch (action.type) {
        case RECEIVE_REQUEST:
            delete newState.accepted[action.requestId]
            delete newState.pending[action.requestId]
            newState =
                action.request.accepted ? {
                    accepted: { [action.request.id]: action.request }
                } : {
                        pending: { [action.request.id]: action.request }
                    }
            return merge({}, state, newState)
        case RECEIVE_FRIENDS:
            let requests = {
                accepted: {},
                pending: {}
            }
            action.accepted.forEach(request => requests.accepted[request.id] = request)
            action.pending.forEach(request => requests.pending[request.id] = request)
            return merge({}, requests)
        case DELETE_REQUEST:
            newState = merge({}, state)
            delete newState.accepted[action.requestId]
            delete newState.pending[action.requestId]
            return newState
        default:
            return state
    }
}