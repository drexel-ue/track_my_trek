import React from 'react'
import TrekCreateMapContainer from './trek_create_map_container'
import SideBar from './trek_create_side_bar'

export default () => {
    return (
        <div className='trek_create'>
            <SideBar />
            <TrekCreateMapContainer />
        </div>
    )
}