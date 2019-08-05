import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TrekShow from './trek_show'
import { fetchTrek } from '../../actions/trek';

const msp = ({ entities }, ownProps) => {
    const defaultTrek = {
        map_name: 'hmm...',
        activity: 'hmm...',
        distance: '"The"'
    }
    return ({
        trek: entities.treks[ownProps.match.params.id] || defaultTrek,
        waypoints: entities.waypoints
    })
}
const mdp = dispatch => ({
    fetchTrek: id => dispatch(fetchTrek(id))
})

export default withRouter(connect(msp, mdp)(TrekShow))