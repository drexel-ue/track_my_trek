import React from 'react'

export default class RouteDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mapName: ''
        }
    }

    handleInput(event) {
        this.setState({ mapName: event.target.value })
    }

    render() {
        return (
            <div className='route_details'>
                <button>Route Details</button>
                <div>
                    <input
                        type="text"
                        value={this.state.mapName}
                        onChange={this.handleInput}
                        placeholder='What do we call this map?'
                    />
                </div>
            </div>
        )
    }
}
