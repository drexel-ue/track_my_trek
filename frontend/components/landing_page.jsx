import React from 'react'
import SignupButtonContainer from './nav_bar/signup_button_container';
import LoginButtonContainer from './nav_bar/login_button_container';

export default props => {
    const topLine = <div className='top_line'></div>
    const bottomLine = <div className='bottom_line'></div>

    return (
        <div className='landing_page'>
            <div className='call_to_start_session'>
                <img
                    className='pic'
                    src='https://images.unsplash.com/photo-1467139701929-18c0d27a7516?ixlib=rb-1.2.1&ixclassName=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                    alt="people walking beside the mountain"
                    width='100%' />
                <div className='info'>
                    {topLine}
                    <div className='keep_every_step'>KEEP EVERY STEP</div>
                    {bottomLine}
                    <div className='description'>
                        Track a Trek of any kind, with the support of your closest friends.
                    </div>
                    <SignupButtonContainer placement='call_to_start_session' />
                    <div className='already_a_member'>
                        <div>Already a member?</div>
                        <LoginButtonContainer placement='call_to_start_session' />
                    </div>
                </div>
            </div>
        </div>
    )
}