import { connect } from "react-redux";
import { login } from "../../actions/session";
import DemoLogin from "./demo_login";

const msp = _ => ({
  user: {
    username: "trek@tracker.com",
    password: "test123"
  }
});
const mdp = dispatch => {
  return {
    login: user => dispatch(login(user))
  };
};

export default connect(
  msp,
  mdp
)(DemoLogin);
