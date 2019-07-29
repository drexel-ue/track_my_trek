import React from 'react'
import HomeButton from './home_button'
import NavBarItemContainer from './nav_bar_item_container';

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
        </ul>
    </div>
}