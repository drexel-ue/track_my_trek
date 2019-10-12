export const SET_MAP = "SET_MAP";
export const UNSET_MAP = "UNSET_MAP";

const setMap = map => ({
  type: SET_MAP,
  map
});
const unsetMap = () => ({ type: UNSET_MAP });

export const globalizeMap = map => dispatch => dispatch(setMap(map));
export const deGlobalizeMap = () => dispatch => dispatch(unsetMap());
