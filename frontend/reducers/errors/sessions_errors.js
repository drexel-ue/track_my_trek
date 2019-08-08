import {
    RECEIVE_USER, RECEIVE_SESSION_ERRORS
} from '../../actions/session';
import { merge } from 'lodash';


const defaultState = [];

export default (state = defaultState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER:
            return defaultState;
        case RECEIVE_SESSION_ERRORS:
            return merge([], action.errors);
        default:
            return state;
    }
}