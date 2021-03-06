import React from 'react'
import FriendIndexItemContainer, { UNFRIEND, RECEIVED, SENT } from './friend_index_item_container'

export default class FriendIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            render: false
        }
    }

    componentDidMount() {
        this.props.fetchFriends(this.props.userId)
            .then(() => this.setState({ render: true }))
    }

    friends() {
        return this.state.render ? (
            <div className='pending_and_accepted'>
                <div className='results'>
                    {this.props.accepted.map(user => (
                        <FriendIndexItemContainer key={user.id} user={user} type={UNFRIEND} />
                    ))}
                </div>
                <div className='divider'></div>
                <div className='friend_count pending'>
                    PENDING
                </div>
                <div className='results'>
                    {this.props.pending.map(user => (
                        <FriendIndexItemContainer
                            key={user.id}
                            user={user}
                            type={
                                this.props.requestMap[user.id].requester_id == user.id ?
                                    RECEIVED : SENT
                            }
                            requestId={this.props.requestMap[user.id].id} />
                    ))}
                </div>
            </div>

        ) : <div></div>
    }

    render() {
        return (
            <div className='friends_index'>
                <div className='friend_count'>
                    FRIENDS ({this.props.friendCount} OF {this.props.friendCount})
                </div>

                {this.friends()}

            </div>
        )
    }
}