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
                accepted: [],
                pending: []
            }
            action.requests.forEach(request => {
                if (action.userId == request.requester_id) {
                    if (request.accepted) {
                        if (!state.accepted.includes(request.requestee_id)
                            && !requests.accepted.includes(request.requestee_id)) {
                            requests.accepted.push(request.requestee_id)
                        }
                    } else {
                        if (!state.pending.includes(request.requestee_id
                            && !requests.pending.includes(request.requestee_id))) {
                            requests.pending.push(request.requestee_id)
                        }
                    }
                } else {
                    if (request.accepted) {
                        if (!state.accepted.includes(request.requester_id)
                            && !requests.accepted.includes(request.requester_id)) {
                            requests.accepted.push(request.requester_id)
                        }
                    } else {
                        if (!state.pending.includes(request.requester_id)
                            && !requests.pending.includes(request.requester_id)) {
                            requests.pending.push(request.requester_id)
                        }
                    }
                }
            })

            return merge({}, state, requests)
        default:
            return state
    }
}