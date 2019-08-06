import { combineReducers } from 'redux';
import users from './users';
import steps from './steps'
import waypoints from './waypoints'
import points from './points'
import treks from './trek'

export default combineReducers({
    users,
    steps,
    waypoints,
    points,
    treks
});