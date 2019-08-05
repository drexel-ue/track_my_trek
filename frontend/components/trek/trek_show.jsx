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
            .then(response => {
                debugger
                this.setState({ trek: response.trek })
            })
    }

    navigation() {
        return (
            <div className='navigation'>
                <Link to='/dashboard'>Home</Link> > <Link to='/dashboard'>My Treks</Link> > Trek Details
            </div>
        )
    }

    mapName() {
        // debugger
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
                    <div className='distance'>
                        <div>Distance</div>
                        {this.state.trek.distance}
                        <p>miles</p>
                        <div>climb</div>
                        {this.state.trek.climb}
                        <p>{this.state.trek.climb}ft</p>
                    </div>
                </div>
                <div className='description'>
                    <div className='begins_in_created_by'>
                        <div>
                            <p className='label'>BEGINS IN: </p>
                            <p className='body'>{this.state.trek.begins_in}</p>
                        </div>
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