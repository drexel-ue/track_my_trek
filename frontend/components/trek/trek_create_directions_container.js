import { connect } from "react-redux";
import TrekDirections from "./trek_create_directions";
import { unsetSteps } from "../../actions/trek";

const msp = ({ entities }) => ({
  steps: entities.steps
});
const mdp = dispatch => ({
  unsetSteps: () => dispatch(unsetSteps())
});

export default connect(
  msp,
  mdp
)(TrekDirections);
