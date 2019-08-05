import React from 'react'
import { Link } from 'react-router-dom'

export default class TrekShow extends React.Component {

    constructor(props) {
        super(props)
        debugger
    }

    navigation() {
        return (
            <div className='navigation'>
                <Link to='/dashboard'>Home</Link> > <Link to='/dashboard'>My Treks</Link> > Trek Details
            </div>
        )
    }

    render() {
        return (
            <div className='trek_show'>
                <div className='main_content'>
                    {this.navigation()}
                </div>
                <div className='map_name'>
                    {this.trek.map_name}
                </div>
                <div className='sidebar'></div>
            </div>
        )
    }
}