import { RECEIVE_TREK, RECEIVE_TREKS } from "../../actions/trek";
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TREK:
      return merge({}, state, { [action.trek.id]: action.trek });
    case RECEIVE_TREKS:
      return merge(
        {},
        state,
        action.treks.reduce((obj, trek) => {
          obj[trek.id] = trek;
          return obj;
        }, {})
      );
    default:
      return state;
  }
};
