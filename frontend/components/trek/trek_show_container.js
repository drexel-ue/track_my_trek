import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TrekShow from "./trek_show";
import { fetchTrek } from "../../actions/trek";

const msp = ({ entities }, ownProps) => {
  const defaultTrek = {
    map_name: "hmm...",
    activity: "hmm...",
    privacy: "hmm..."
  };
  return {
    trek: entities.treks[ownProps.match.params.id] || defaultTrek
  };
};
const mdp = dispatch => ({
  fetchTrek: id => dispatch(fetchTrek(id))
});

export default withRouter(
  connect(
    msp,
    mdp
  )(TrekShow)
);
