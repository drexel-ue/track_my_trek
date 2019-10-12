import { SET_MAP, UNSET_MAP } from "../../actions/map";

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case SET_MAP:
      return action.map;
    case UNSET_MAP:
      return {};
    default:
      return state;
  }
};
