import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import FriendsIndexContainer from './friends_index_container';
import ProspectiveFriendsSearchContainer from './prospective_friends_search_container';

export default class Friends extends React.Component {

    pushTo(to) {
        return event => {
            event.preventDefault()
            this.props.history.push(to)
        }
    }

    persistStlyeSelect(match) {
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
                        style={this.persistStlyeSelect('/friends')}
                        onClick={this.pushTo('/friends')}>
                        MY FRIENDS
                        </div>
                    <div
                        style={this.persistStlyeSelect('/friends/find')}
                        onClick={this.pushTo('/friends/find')}>
                        FIND FRIENDS
                    </div>
                    <div
                        style={this.persistStlyeSelect('/friends/invite')}
                        onClick={this.pushTo('/friends/invite')}>
                        INVITE FRIENDS
                    </div>
                </ul>
            </div>
        )
    }

    switch() {
        return (
            <div className='switch'>
                <Switch>
                    <Route exact path='/friends' component={FriendsIndexContainer} />
                    <Route exact path='/friends/find' component={ProspectiveFriendsSearchContainer} />
                </Switch>
            </div>
        )
    }

    render() {
        return (
            <div className='friends' >
                {this.persist()}
                {this.switch()}
            </div>
        )
    }
}