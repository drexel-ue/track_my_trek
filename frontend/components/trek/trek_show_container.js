import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TrekShow from './trek_show'

const msp = ({ entities }, ownProps) => ({
    trek: entities.treks[ownProps.match.params.id]
})
const mdp = dispatch => ({})

export default withRouter(connect(msp, mdp)(TrekShow))