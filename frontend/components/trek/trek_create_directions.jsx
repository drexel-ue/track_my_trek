import React from 'react'
import TrekStep from './trek_create_step'

export default class TrekDirections extends React.Component {
    constructor(props) {
        super(props)
        this.steps = this.props.steps
    }

    render() {
        return (
            <div className='route_directions'>
                <button>Route Directions/Notes</button>
                <ul>
                    {
                        this.steps.map((step, index) => {
                            <li key={index}>
                                <TrekStep step={step} />
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}