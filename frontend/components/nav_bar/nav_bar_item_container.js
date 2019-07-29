import { connect } from 'react-redux'
import NavBarItem from './nav_bar_item';

const msp = (_, ownProps) => ({
    to: ownProps.to || '/',
    title: ownProps.title
})
const mdp = _ => ({})

export default connect(msp, mdp)(NavBarItem)