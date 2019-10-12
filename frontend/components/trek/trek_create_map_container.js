import { connect } from "react-redux";
import {
  setSteps,
  setErrors,
  setWaypoints,
  setPoints
} from "../../actions/trek";
import { globalizeMap, deGlobalizeMap } from "../../actions/map";
import TrekCreateMap from "./trek_create_map";

const msp = state => ({});
const mdp = dispatch => ({
  handleNewSteps: steps => dispatch(setSteps(steps)),
  handleErrors: errors => dispatch(setErrors(errors)),
  setWaypoints: waypoints => dispatch(setWaypoints(waypoints)),
  setPoints: waypoints => dispatch(setPoints(waypoints)),
  setMap: map => dispatch(globalizeMap(map)),
  unsetMap: () => dispatch(deGlobalizeMap())
});

export default connect(
  msp,
  mdp
)(TrekCreateMap);
