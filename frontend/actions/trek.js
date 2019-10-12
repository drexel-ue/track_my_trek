import * as TrekApiUtil from "../util/trek_api_util";
import { receiveUser } from "./session";

export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEPS_ERROR = "RECEIVE_STEPS_ERROR";
export const RECEIVE_WAYPOINTS = "RECEIVE_WAYPOINTS";
export const RECEIVE_POINTS = "RECEIVE_POINTS";
export const RECEIVE_TREK = "RECEIVE_TREK";
export const RECEIVE_TREKS = "RECEIVE_TREKS";

const receiveSteps = steps => ({
  type: RECEIVE_STEPS,
  steps
});
const receiveStepsError = error => ({
  type: RECEIVE_STEPS_ERROR,
  error
});
const receiveWaypoints = waypoints => ({
  type: RECEIVE_WAYPOINTS,
  waypoints
});
const receivePoints = points => ({
  type: RECEIVE_POINTS,
  points
});
const receiveTrek = trek => ({
  type: RECEIVE_TREK,
  trek
});
const receiveTreks = treks => ({
  type: RECEIVE_TREKS,
  treks
});

export const setSteps = steps => dispatch => dispatch(receiveSteps(steps));
export const setErrors = error => dispatch =>
  dispatch(receiveStepsError(error));
export const setWaypoints = waypoints => dispatch =>
  dispatch(receiveWaypoints(waypoints));
export const setPoints = points => dispatch => dispatch(receivePoints(points));
export const saveRoute = trekData => dispatch =>
  TrekApiUtil.saveTrek(trekData).then(trek => dispatch(receiveTrek(trek)));
export const fetchTrek = id => dispatch =>
  TrekApiUtil.fetchTrek(id).then(({ trek }) => dispatch(receiveTrek(trek)));
export const fetchTreks = () => dispatch =>
  TrekApiUtil.fetchTreks().then(({ treks }) => dispatch(receiveTreks(treks)));
export const fethLocation = point => TrekApiUtil.fetchLocation(point);
