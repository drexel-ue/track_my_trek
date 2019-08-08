import { combineReducers } from 'redux';
import userId from './userId'
import friends from './friends'

export default combineReducers({
    userId,
    friends
});