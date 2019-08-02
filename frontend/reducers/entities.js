import { combineReducers } from 'redux';
import users from './users';
import steps from './steps'
import waypoints from './waypoints'

export default combineReducers({
    users,
    steps,
    waypoints
});