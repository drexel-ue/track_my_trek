import React from 'react'

export default class TrekDetails extends React.Component {
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
                <div id='rout_details_content'>
                    <input
                        type="text"
                        value={this.state.mapName}
                        onChange={this.handleInput}
                        placeholder='Name this map'
                    />
                </div>
            </div>
        )
    }
}
