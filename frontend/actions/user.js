import * as ApiUtil from "../util/user_api_util";
import { receiveUser } from "./session";

export const fetchUser = id => dispatch =>
  ApiUtil.fetchUser(id).then(
    user => dispatch(receiveUser(user)),
    error => alert(error.responseJSON.errors)
  );
