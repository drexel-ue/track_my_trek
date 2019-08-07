import React from 'react'
import { Link } from 'react-router-dom'

export default class Friends extends React.Component {

    pushTo(to) {
        return event => {
            event.preventDefault()
            this.props.history.push(to)
        }
    }

    persist() {
        return (
            <div>
                <div className='title'>MY FRIENDS</div>
                <ul className='nav_row'>
                    <div
                        onClick={this.pushTo('/friends')}>
                        MY FRIENDS
                        </div>
                    <div
                        onClick={this.pushTo('/friends/find')}>
                        FIND FRIENDS
                    </div>
                    <div
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