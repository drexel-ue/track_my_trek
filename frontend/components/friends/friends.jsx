import React from 'react'
import { Link } from 'react-router-dom'

export default class Friends extends React.Component {

    pushTo(to) {
        return event => {
            event.preventDefault()
            this.props.history.push(to)
        }
    }

    stlyeSelect(match) {
        return this.props.location.pathname == match ? {
            borderTop: '3px solid #2F98D9',
            height: '48px',
            color: 'black',
            backgroundColor: 'white'
        } : {}
    }

    persist() {
        return (
            <div>
                <div className='title'>MY FRIENDS</div>
                <ul className='nav_row'>
                    <div
                        style={this.stlyeSelect('/friends')}
                        onClick={this.pushTo('/friends')}>
                        MY FRIENDS
                        </div>
                    <div
                        style={this.stlyeSelect('/friends/find')}
                        onClick={this.pushTo('/friends/find')}>
                        FIND FRIENDS
                    </div>
                    <div
                        style={this.stlyeSelect('/friends/invite')}
                        onClick={this.pushTo('/friends/invite')}>
                        INVITE FRIENDS
                    </div>
                </ul>
            </div>
        )
    }

    render() {
        return (
            <div className='friends' >
                {this.persist()}
            </div>
        )
    }
}