import { combineReducers } from 'redux';
import users from './users';
import steps from './steps'

export default combineReducers({
    users,
    steps
});