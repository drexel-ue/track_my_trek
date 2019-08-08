import React from 'react'
import FriendIndexItemContainer from './friend_index_item_container'

export default class FriendIndex extends React.Component {

    componentDidMount() {
        this.props.fetchFriends(this.props.userId)
    }

    friends() {
        return (
            <div className='friends'>
                <div className='results'>
                    {this.props.accepted.map(user => (
                        <FriendIndexItemContainer key={user.id} user={user} />
                    ))}
                </div>
                <div className='divider'></div>
                <div className='results'>
                    {this.props.accepted.map(user => (
                        <FriendIndexItemContainer key={user.id} user={user} />
                    ))}
                </div>
            </div>

        )
    }

    render() {
        return (
            <div className='friends_index'>
                <div className='friend_count'>
                    FRIENDS ({this.props.friendCount} OF {this.props.friends.length})
                </div>

                <div>
                    {this.props.friends.map(friend => {
                        this.props.friendCount += 1
                        return <div></div>
                    })}
                </div>

            </div>
        )
    }
}