import React from 'react'

export default props =>
    <div
        className={props.type + '_button'}
        onClick={props.handleClick}>
        <div className='overlay'>
            {props.type.toUpperCase()}
        </div>
    </div>