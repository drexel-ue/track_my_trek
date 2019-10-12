import { combineReducers } from "redux";
import users from "./users";
import steps from "./steps";
import waypoints from "./waypoints";
import points from "./points";
import treks from "./treks";
import map from "./map";

export default combineReducers({
  users,
  steps,
  waypoints,
  points,
  treks,
  map
});
