import React from 'react'
import TrekCreateMap from './trek_create_map'
import SideBar from './trek_create_side_bar'

export default () => {
    return (
        <div className='trek_create_sidebar'>
            <SideBar />
            <TrekCreateMap />
        </div>
    )
}