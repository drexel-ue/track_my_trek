import React from 'react'
import HomeButton from './home_button'
import LoginButtonContainer from './login_button_container'
import SignupButtonContainer from './signup_button_container'
import NavBarItemContainer from './nav_bar_item_container'
import NavMenuButtonContainer from './nav_menu_button_container';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    authButtons() {
        return (
            this.props.history.location.pathname != '/login' && this.props.history.location.pathname != '/signup' ? <div className='session_buttons'>
                <LoginButtonContainer key='login_button' placement='nav' />
                <SignupButtonContainer key='signup_button' placement='nav' />
            </div> : <div></div>
        )
    }

    render() {
        const titles = [
            'Training',
            'Treks',
            'Challenges',
            'Go MVP',
            'Blog',
            'Shop'
        ]

        // debugger
        return <div id='nav_bar'>
            <ul>
                <HomeButton />
                {titles.map((title, index) =>
                    <NavBarItemContainer
                        title={title}
                        key={index} />)
                }
                {this.props.loggedIn ? <NavMenuButtonContainer /> : this.authButtons()}
            </ul>
        </div>
    }
}