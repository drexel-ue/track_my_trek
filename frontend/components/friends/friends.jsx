import React from 'react'
import { Link } from 'react-router-dom'

export default class Friends extends React.Component {

    persist() {
        return (
            <div>
                <div className='title'>MY FRIENDS</div>
                <ul className='nav_row'>
                    <Link to='#'>MY FRIENDS</Link>
                    <Link to='friends/find'>FIND FRIENDS</Link>
                    <Link to='friends/invite'>INVITE FRIENDS</Link>
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