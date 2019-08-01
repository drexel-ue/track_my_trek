import React from 'react'

export default class TrekCreateSearcbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { location: '', goingTo: '' }
    }

    handleInput(field) {
        return event =>
            this.setState({ location: event.target.value })
    }

    toggleGeDirections(event) {
        console.log('dlbbbj')
        event.preventDefault()
        event.stopPropagation()
        document.getElementById('get_directions_div').classList.toggle('show')
    }

    render() {
        const locationInput = field => <input
            type="text"
            value={this.state[field]}
            onChange={this.handleInput(field)}
            placeholder='wherevs'
        />

        return (
            <div className='search_bar'>
                {locationInput('location')}
                <button id='search_button'>Search</button>
                <button className='expand_button'>X</button>
                <div id='get_directions_div' className='hidden'>
                    <div className='hide_get_directions_div'>
                        <div>Treking to:</div>
                        <button onClick={this.toggleGeDirections}>X</button>
                    </div>
                    <div className='goint_to_input_row'>
                        {locationInput('goingTo')}
                        <button>Get Directions</button>
                    </div>
                    <div className='transport_type_options'>
                        <button>foot</button>
                        <button>bike</button>
                        <button>car</button>
                    </div>
                </div>
                <div className='show_get_directions'>
                    <button onClick={this.toggleGeDirections}>Get Directions</button>
                </div>
            </div>
        )
    }
}