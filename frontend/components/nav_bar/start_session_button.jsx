import React from 'react'

export default ({ type, placement, handleClick }) => {
    const navLogin = {
        border: 'none',
        'margin-right': '2vw',
        'margin-left': '5vw',
        padding: '10px 20px',
        'font-size': '1.2vw'
    }
    const landingLogin = {
        border: 'none',
        margin: '0px 0px 0 40px',
        padding: '10px 20px',
        height: '70px',
        'font-size': '1.2vw'
    }
    const navSignup= {
        color: 'white',
        'background-color': '#1ddd7c',
        border: 'none',
        'border-radius': '4px',
        padding: '10px 20px',
        'font-size': '1.2vw'
    }
    const landingSignup= {
        color: 'white',
        'background-color': '#1ddd7c',
        border: 'none',
        'border-radius': '4px',
        'margin-left':'auto',
        padding: '10px 20px',
        'font-size': '1.6vw',
        width: '12vw',
        'text-align':'center'
    }

    return (
        <div
            className={type + '_button'}
            onClick={handleClick}
            style={
                type == 'login' ?
                    placement == 'nav' ? navLogin : landingLogin
                    : placement == 'nav' ? navSignup : landingSignup
            }>
            <div className='overlay'>
                {type.toUpperCase()}
            </div>
        </div>
    )
}