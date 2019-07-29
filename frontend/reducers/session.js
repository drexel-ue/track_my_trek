import {
    RECEIVE_USER, LOGOUT_CURRENT_USER
} from '../actions/session';
import { merge } from 'lodash';


const defaultState = {
    userId: null
};

export default (state = defaultState, action) => { 
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER:
            return merge({}, { userId: action.user.id }); 
        case LOGOUT_CURRENT_USER:
            return merge({}, defaultState); 
        default:
            return state;
    }

}

