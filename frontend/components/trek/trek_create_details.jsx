import React from 'react'

export default class TrekDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mapName: '',
            activity: '',
        }
        this.saveRoute = this.saveRoute.bind(this)
    }

    handleInput(field) {
        return event =>
            this.setState({ [field]: event.target.value })
    }

    saveRoute(event) {
        debugger
        event.preventDefault()
        this.props.saveRoute(this.props.waypoints)
    }

    render() {

        const popularActivities = [
            'Walk',
            'Winter Sport / Activity',
            'Bike Ride/',
            'Swim',
            'Run',
            'Sport / Other Activity',
            'Hike'
        ]

        return (
            <div className='trek_details'>
                <button>Trek Details</button>
                <div id='trek_details_content'>
                    <input
                        type="text"
                        value={this.state.mapName}
                        onChange={this.handleInput('mapName')}
                        placeholder='Name this map'
                    />
                    <div className='activity_selection'>
                        <input
                            type="text"
                            value={this.state.activity}
                            onChange={this.handleInput('activity')}
                            placeholder='Choose an Activity'
                        />
                        <ul>
                            {
                                popularActivities.map((activity, index) =>
                                    <li
                                        key={index}>
                                        {activity}
                                    </li>
                                )
                            }
                        </ul>
                        <button
                            onClick={this.saveRoute}
                        >SAVE ROUTE</button>
                    </div>
                </div>
            </div>
        )
    }
}


