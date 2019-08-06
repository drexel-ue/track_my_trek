import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TrekShow from './trek_show'
import { fetchTrek } from '../../actions/trek';

const msp = ({ entities }, ownProps) => {
    const defaultTrek = {
        map_name: 'hmm...',
        activity: 'hmm...',
    }
    return ({
        trek: entities.treks[ownProps.match.params.id] || defaultTrek,
        waypoints: entities.waypoints,
        user: {
            first_name: "test",
            last_name: "test"
        }
    })
}
const mdp = dispatch => ({
    fetchTrek: id => dispatch(fetchTrek(id)),
})

export default withRouter(connect(msp, mdp)(TrekShow))