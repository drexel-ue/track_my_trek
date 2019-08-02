import React from 'react'

export default ({ step }) => {
    return (
        <div className='trek_step'>
            <div>{step.distance}</div>
            <div>{step.text}</div>
        </div>
    )
}