import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SideBarInfoCard from "./side_bar_info_card";

const msp = ({ entities, session }, ownProps) => ({
  user: entities.users[ownProps.match.params.id || session.userId]
});
const mdp = dispatch => ({});

export default withRouter(
  connect(
    msp,
    mdp
  )(SideBarInfoCard)
);
