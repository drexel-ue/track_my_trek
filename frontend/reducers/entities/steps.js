import { merge } from "lodash";
import { RECEIVE_STEPS, CLEAR_STEPS } from "../../actions/trek";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STEPS:
      return merge({}, action.steps);
    case CLEAR_STEPS:
      return [];
    default:
      return state;
  }
};
