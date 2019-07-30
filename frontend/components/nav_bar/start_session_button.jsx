import React from 'react'

export default props =>
    <button
        id={props.type + '_button'}
        onClick={props.handleClick}>
        <div id='overlay'>
            {props.type.toUpperCase()}
        </div>
    </button>