import React from 'react'

export default class ProspectiveFriendsSreach extends React.Component {
    search() {
        return (
            <div className='search'>
                <div className='friend_count'>
                    FIND FRIENDS TO TREK WITH BY FIRST NAME, LAST NAME, OR EMAIL:
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className='prospective_friends_search'>
                {this.search()}
            </div>
        )
    }
}