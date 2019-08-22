import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DashTab from "./dash_tab";

const msp = (state, ownProps) => ({
  title: ownProps.title
});
const mdp = dispatch => ({});

export default withRouter(
  connect(
    msp,
    mdp
  )(DashTab)
);
