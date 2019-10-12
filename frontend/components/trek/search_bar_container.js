import { connect } from "react-redux";
import TrekCreateSearcbar from "./trek_create_searchbar";

const msp = ({ entities }) => ({
  map: entities.map
});
const mdp = dispatch => ({});

export default connect(
  msp,
  mdp
)(TrekCreateSearcbar);
