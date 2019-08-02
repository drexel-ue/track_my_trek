import { combineReducers } from 'redux';
import session from './sessions_errors'
import trekCreate from './trek_create_errors'

export default combineReducers({
    session,
    trekCreate
});