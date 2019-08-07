import React from 'react'
import { Link } from 'react-router-dom'

export default props => {


    return (
        <div className='friends'>
            <div className='title'>MY FRIENDS</div>
            <ul className='nav_row'>
                <Link to='#'></Link>
                <Link to='fri'></Link>
                <Link></Link>
            </ul>
        </div>
    )
}