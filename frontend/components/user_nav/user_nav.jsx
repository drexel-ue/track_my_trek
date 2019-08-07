import React from 'react'
import { Link } from 'react-router-dom'

export default class UserNav extends React.Component {

    componentDidMount() {
        window.addEventListener('hashchange', () => this.determineShow)
        console.log('mounted')
    }

    determineShow() {
        debugger
        const self = document.getElementById('user_nav')
        !this.props.userId || this.props.location.pathname == '/treks/create'
            ? self.classList.add('hide')
            : self.classList.remove('hide')

    }

    render() {
        return (
            <div id='user_nav'>
                <ul>
                    <Link to='/treks/create'>Track a Trek</Link>
                    <Link to='#'>Log Workout</Link>
                    <Link to='#'>Import Workout</Link>
                    <Link to='#'>Create a Goal</Link>
                </ul>
            </div>
        )
    }
}