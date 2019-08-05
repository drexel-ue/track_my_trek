import React from 'react'
import { Link } from 'react-router-dom'

export default class TrekShow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            trek: this.props.trek,
            waypoints: this.props.waypoints
        }
    }

    componentDidMount() {
        this.props.fetchTrek(this.props.match.params.id)
            .then(response =>
                this.setState({
                    trek: response.trek.trek,
                    waypoints: response.waypoints.waypoints
                }, () => this.props.fetchLocation(this.state.waypoints[0])
                    .then(response => {
                        const result = response.hits[0]
                        this.setState({
                            begins_in: `${result.city}, ${result.state}, ${result.country}`
                        })
                    }
                    )
                )
            )
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

    writtenDeats() {
        return (
            <div className='written_deats'>
                <div className='distance_and_climb'>
                    <div className='the_distance'>
                        <div>Distance</div>
                        {this.state.trek.distance}
                        <p>miles</p>
                    </div>
                    <div className='the_climb'>
                        <div>climb</div>
                        {this.state.trek.climb}
                        <p>{this.state.trek.climb}ft</p>
                    </div>
                </div>
                <div className='description'>
                    <div>
                        <p className='label'>BEGINS IN: </p>
                        <p className='body'>{this.state.begins_in}</p>
                    </div>
                    <div>
                        <p className='label'>CREATED BY: </p>
                        <p className='body'>{this.state.begins_in}</p>
                    </div>
                </div>
            </div>

        )
    }

    render() {
        return (
            <div className='trek_show'>
                <div className='main_content'>
                    {this.navigation()}
                    {this.mapName()}
                    {this.writtenDeats()}
                </div>

                <div className='sidebar'></div>
            </div >
        )
    }
}