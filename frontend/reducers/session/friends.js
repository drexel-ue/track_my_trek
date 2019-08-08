import { RECEIVE_REQUEST, RECEIVE_FRIENDS } from '../../actions/friends'
import { merge } from 'lodash'

const defaultState = {
    accepted: {},
    pending: {}
}

export default (state = defaultState, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_REQUEST:
            let newState =
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
            action.accepted.forEach(request => requests.pending[request.id] = request)
            return merge({}, state, requests)
        default:
            return state
    }
}