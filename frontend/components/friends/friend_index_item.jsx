import React from 'react'
import { Link } from 'react-router-dom'
import { ADD_FRIEND, UNFRIEND, DISPLAY_NONE, SENT } from './friend_index_item_container';

export default class ProspectiveFriendIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.action = this.action.bind(this)
    }

    action(event) {
        event.preventDefault()
        event.stopPropagation()
        this.props.action(
            this.props.type, this.props.user.id, this.props.requestId
        ).then(() => location.reload(true))
    }

    render() {
        return (
            <div className='prospective_friend_index_item'>
                <img
                    src="https://static.mapmyfitness.com/d/website/avatars/avatar_fitness_female_80.jpg"
                    alt=""
                    className='pic' />
                <Link to='#'>{this.props.user.first_name} {this.props.user.last_name.slice(0, 1)}.</Link>
                <button
                    className='send_request'
                    onClick={this.action}>
                    {this.props.type == ADD_FRIEND ?
                        'ADD'
                        : this.props.type == UNFRIEND ?
                            'unfriend'
                            : this.props.type == SENT ?
                                'CANCEL'
                                : 'ACCEPT'}
                </button>
            </div>
        )
    }
}