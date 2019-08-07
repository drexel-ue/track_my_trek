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

        const actions = [
            () => this.props.history.push('/friends'),
            () => { },
            () => { },
            () => { },
            this.props.logout
        ]

        return (
            <div className='nav_menu'>
                <div
                    id='nav_menu_button'
                >
                    <button
                        className='profile_pic'>
                        <img src="https://image.flaticon.com/icons/svg/149/149071.svg" alt="" />
                    </button>
                    <div
                        id='nav_menu_contents'
                        className='hide'
                    >
                        <ul>
                            {
                                options.map((option, index) => (
                                    <div key={index}
                                        onClick={actions[index]}>
                                        {option}
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}