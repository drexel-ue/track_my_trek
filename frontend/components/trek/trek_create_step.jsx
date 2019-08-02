import React from 'react'

export default ({ step }) => (
    <div className='trek_step'>
        <div>{step.distance}</div>
        <div>{step.text}</div>
    </div>
)