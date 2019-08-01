import React from 'react'
import { Link } from 'react-router-dom'

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Link to='/treks/create'>Create Route</Link>
            </div>
        )
    }
}