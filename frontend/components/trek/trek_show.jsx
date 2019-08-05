import React from 'react'
import { Link } from 'react-router-dom'

export default class TrekShow extends React.Component {

    constructor(props) {
        super(props)
        this.trek = this.props.trek
    }

    navigation() {
        return (
            <div className='navigation'>
                <Link to='/dashboard'>Home</Link> > <Link to='/dashboard'>My Treks</Link> > Trek Details
            </div>
        )
    }

    mapName() {
        return (
            <div className='map_name'>
                {this.trek.map_name}
            </div>
        )
    }

    render() {
        return (
            <div className='trek_show'>
                <div className='main_content'>
                    {this.navigation()}
                    {this.mapName()}
                    <div className='distance_and_climb'>
                        <div className='distance'>
                            <div>Distance</div>
                            {this.trek.distance}
                            <p>miles</p>
                        </div>
                    </div>
                </div>

                <div className='sidebar'></div>
            </div >
        )
    }
}