import React from 'react'

const SHOW = 'SHOW'
const HIDE = 'HIDE'

export default class NavMenuButton extends React.Component {

    toggleContents(toggle) {
        return (event) => {
            event.preventDefault()
            event.stopPropagation()
            const element = document.getElementById('nav_menu_contents')
            toggle == SHOW ?
                element.classList.remove('hide') :
                element.classList.add('hide')
        }
    }

    render() {
        const options = [
            'Friends',
            'Devices',
            'Support',
            'Settings',
            'Logout'
        ]

        const actions = [
            () => { },
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