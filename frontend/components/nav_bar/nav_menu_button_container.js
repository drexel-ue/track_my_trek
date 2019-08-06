import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NavMenuButton from './nav_menu_button';
import { logout } from '../../actions/session';

const msp = state => ({})
const mdp = dispatch => ({
    logout: () => dispatch(logout())
})

export default withRouter(connect(msp, mdp)(NavMenuButton))