import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SideBarInfoCard from "./side_bar_info_card";

const msp = state => ({});
const mdp = dispatch => ({});

export default withRouter(
  connect(
    msp,
    mdp
  )(SideBarInfoCard)
);
