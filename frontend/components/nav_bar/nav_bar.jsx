import React from 'react'
import HomeButton from './home_button'
import LoginButtonContainer from './login_button_container'
import SignupButtonContainer from './signup_button_container'
import NavBarItemContainer from './nav_bar_item_container'

export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.loggedIn = this.props.loggedIn
    }

    authButtons() {
        return (
            <div className='session_buttons'>
                <LoginButtonContainer key='login_button' placement='nav' />
                <SignupButtonContainer key='signup_button' placement='nav' />
            </div>
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


        return <div id='nav_bar'>
            <ul>
                <HomeButton />
                {titles.map((title, index) =>
                    <NavBarItemContainer
                        title={title}
                        key={index} />)
                }
                {this.loggedIn ? '' : this.authButtons()}
            </ul>
        </div>
    }
}