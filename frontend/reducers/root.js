import { combineReducers } from 'redux';
import session from './session/session';
import errors from './errors/errors';
import entities from './entities/entities';

export default combineReducers({
    entities,
    session,
    errors
});