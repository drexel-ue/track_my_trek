import React from 'react'

export default class FriendIndex extends React.Component {

    componentDidMount() {
        this.props.fetchFriends(this.props.userId)
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