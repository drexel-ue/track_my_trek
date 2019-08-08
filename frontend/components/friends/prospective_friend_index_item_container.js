import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ProspectiveFriendIndexItem from './prospective_friend_index_item'

const msp = (state, ownProps) => ({
    user: ownProps.user
})
const mdp = dispatch => ({
    sendRequest: id => console.log(id)
})

export default withRouter(connect(msp, mdp)(ProspectiveFriendIndexItem))