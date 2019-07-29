import React from 'react'

export default props =>
    <button
        id={props.type + '_button'}
        onClick={props.handleClick}>
        {props.type.toUpperCase()}
    </button>