import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NavMenuButton from './nav_menu_button';

const msp = state => ({})
const mdp = dispatch => ({})

export default withRouter(connect(msp, mdp)(NavMenuButton))