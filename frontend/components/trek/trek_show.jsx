import React from 'react'
import { Link } from 'react-router-dom'

export default class TrekShow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            trek: this.props.trek
        }
    }

    componentDidMount() {
        this.props.fetchTrek(this.props.match.params.id)
            .then(trek => this.setState({ trek }))
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
                {this.state.trek.map_name}
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
                            {this.state.trek.distance}
                            <p>miles</p>
                        </div>
                    </div>
                </div>

                <div className='sidebar'></div>
            </div >
        )
    }
}