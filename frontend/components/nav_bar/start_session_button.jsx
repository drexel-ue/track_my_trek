import React from 'react'
import { Link } from 'react-router-dom'

export default ({ type, placement }) => {
    const navLogin = {
        border: 'none',
        marginRight: '2vw',
        marginLeft: '5vw',
        padding: '10px 20px',
        fontSize: '1.2vw'
    }
    const landingLogin = {
        border: 'solid white 3px',
        borderRadius: '4px',
        margin: '0px 0px 0 40px',
        padding: '10px 20px',
        fontSize: '1.2vw'
    }
    const navSignup = {
        color: 'white',
        backgroundColor: '#1ddd7c',
        border: 'none',
        borderRadius: '4px',
        padding: '10px 20px',
        fontSize: '1.2vw'
    }
    const landingSignup = {
        color: 'white',
        backgroundColor: '#1ddd7c',
        border: 'none',
        borderRadius: '4px',
        marginLeft: 'auto',
        padding: '10px 20px',
        fontSize: '1.6vw',
        width: '12vw',
        textAlign: 'center'
    }

    return (
        <div
            className={type + '_button'}
            style={
                type == 'login' ?
                    placement == 'nav' ? navLogin : landingLogin
                    : placement == 'nav' ? navSignup : landingSignup
            }>
            <div className='overlay'>
                {
                    placement == 'call_to_start_session' && type == 'login'
                        ? 'log in'.toUpperCase()
                        : type.toUpperCase()}
            </div>
        </div>
    )
}