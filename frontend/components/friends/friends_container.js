import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Friends from './friends'

const msp = state => ({})
const mdp = dispatch => ({})

export default withRouter(connect(msp, mdp)(Friends))