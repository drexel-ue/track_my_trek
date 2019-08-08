import {
    RECEIVE_USER, LOGOUT_CURRENT_USER
} from '../../actions/session';
import { merge } from 'lodash';


const defaultState = null;

export default (state = defaultState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER:
            return action.user.id;
        case LOGOUT_CURRENT_USER:
            return defaultState;
        default:
            return state;
    }

}

