import React from 'react'
import TrekCreateSearcbar from './trek_create_searchbar';
import TrekDetails from './trek_create_details';
import TrekDirectionsContainer from './trek_create_directions_container';

export default props => {
    return (
        <div className='create_sidebar'>
            <div>Choose Trek Location</div>
            <TrekCreateSearcbar />
            <TrekDetails />
            <TrekDirectionsContainer />
        </div>
    )
}