import React from 'react'
import TrekCreateSearcbar from './trek_create_searchbar';
import RouteDetails from './trek_create_route_details';
import RouteDirections from './trek_create_directions';

export default props => {
    return (
        <div className='create_sidebar'>
            <div>Choose Trek Location</div>
            <TrekCreateSearcbar />
            <RouteDetails />
            <RouteDirections />
        </div>
    )
}