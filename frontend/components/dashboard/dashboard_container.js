import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { fetchTreks } from "../../actions/trek";

const msp = ({ entities }) => ({
  treks: Object.values(entities.treks) || []
});
const mdp = dispatch => ({
  fetchTreks: () => dispatch(fetchTreks())
});

export default connect(
  msp,
  mdp
)(Dashboard);
