import React from 'react'

export default class NavMenuButton extends React.Component {
    render() {
        const options = [
            'Friends',
            'Devices',
            'Support',
            'Settings',
            'Logout'
        ]

        return (
            <div className='nav_menu'>
                <div className='nav_menu_button'>
                    <button
                        className='profile_pic'>
                        pic
                </button>
                    <div className='nav_menu_contents'>
                        <ul>
                            {
                                options.map((option, index) => (
                                    <li key={index}>
                                        <button>{option}</button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}