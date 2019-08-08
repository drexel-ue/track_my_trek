import React from 'react'
import FriendIndexItemContainer, { UNFRIEND, RECEIVED, SENT } from './friend_index_item_container'

export default class FriendIndex extends React.Component {

    componentDidMount() {
        this.props.fetchFriends(this.props.userId)
    }

    friends() {
        return (
            <div className='friends'>
                <div className='results'>
                    {this.props.accepted.map(user => (
                        <FriendIndexItemContainer key={user.id} user={user} type={UNFRIEND} />
                    ))}
                </div>
                <div className='divider'></div>
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

        )
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