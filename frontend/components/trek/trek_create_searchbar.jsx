import React from 'react'

export default class TrekCreateSearcbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { location: '' }
    }

    handleInput(event) {
        this.setState({ location: event.target.value })
    }

    render() {
        return (
            <div className='search_bar'>
                <input
                    type="text"
                    value={this.state.location}
                    onChange={this.handleInput}
                    placeholder='wherevs'
                />
                <button className='search_button'>Search</button>
                <button className='expand_button'>X</button>
            </div>
        )
    }
}