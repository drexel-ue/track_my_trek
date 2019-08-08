import { combineReducers } from 'redux';
import users from './users';
import steps from './steps'
import waypoints from './waypoints'
import points from './points'
import treks from './treks'

export default combineReducers({
    users,
    steps,
    waypoints,
    points,
    treks
});