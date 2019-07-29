import React from 'react'
import HomeButton from './home_button'
import NavBarItemContainer from './nav_bar_item_container';
import LoginButtonContainer from './login_button_container';
import SignupButtonContainer from './signup_button_container';

export default () => {
    const titles = [
        'Training',
        'Routes',
        'Challenges',
        'Go MVP',
        'Blog',
        'Shop'
    ]


    return <div id='nav_bar'>
        <ul>
            <HomeButton />
            {titles.map(title =>
                <NavBarItemContainer
                    title={title} />)
            }
            <LoginButtonContainer />
            <SignupButtonContainer />
        </ul>
    </div>
}