import React from 'react'
import { Link } from 'react-router-dom'

export default class ProspectiveFriendIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.user = this.props.user
        this.sendRequest = this.sendRequest.bind(this)
    }

    sendRequest(event) {
        event.preventDefault()
        event.stopPropagation()
        this.props.sendRequest(this.user.id)
    }

    render() {
        return (
            <div className='prospective_friend_index_item'>
                <img
                    src="https://static.mapmyfitness.com/d/website/avatars/avatar_fitness_female_80.jpg"
                    alt=""
                    className='pic' />
                <Link to='#'>{this.user.first_name} {this.user.last_name.slice(0, 1)}.</Link>
                <button
                    className='send_request'
                    onClick={this.sendRequest}>
                    ADD
                </button>
            </div>
        )
    }
}