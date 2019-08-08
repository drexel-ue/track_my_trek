import { RECEIVE_USER } from '../../actions/session'
import { RECEIVE_PROSPECTIVE_FRIENDS } from '../../actions/friends'
import { merge } from 'lodash'

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_PROSPECTIVE_FRIENDS:
            let friends = {}
            action.prospective_friends.forEach(friend => friends[friend.id] = friend)
            return merge({}, state, friends)
        default:
            return state;
    }
}