import React from 'react'

export default class DemoUserSwitch extends React.Component {
    constructor(props) {
        super(props)
        this.login = this.login.bind(this)
    }

    login(user) {
        return event => {
            event.preventDefault()
            this.props.login(user == 1 ?
                this.props.user1
                : this.props.user2)
                .then(() => location.reload())
        }
    }

    toggleShow(event) {
        event.preventDefault()
        document.getElementById('demo_switch_contents').classList.toggle('hide')
    }

    render() {
        return (
            <div className='demo_switch' onClick={this.toggleShow}>
                <div className='show_button'>
                    DEMO SWITCH
                </div>
                <div id='demo_switch_contents' className='hide'>
                    <div className='demo_user_select' onClick={this.login(1)}>
                        Trek Tracker
                    </div>
                    <div className='demo_user_select' onClick={this.login(2)}>
                        Track Treker
                </div>
                </div>
            </div>
        )
    }
}