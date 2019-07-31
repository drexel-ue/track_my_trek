import React from 'react'

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.user
        this.submit = this.submit.bind(this)
    }

    onChange(field) {
        return event => this.setState({ [field]: event.target.value })
    }

    submit(event) {
        event.preventDefault()
        this.props.handleSubmit(this.state)
    }

    toggleDropdown(field) {
        return event => {
            event.preventDefault()
            document.getElementById(field).classList.toggle('show')
        }
    }

    render() {

        const signupForm =
            <div>
                <input
                    type="text"
                    value={this.state.firstName}
                    onChange={this.onChange('firstName')}
                    placeholder='First name' />
                <input
                    type="text"
                    value={this.state.lastName}
                    onChange={this.onChange('lastName')}
                    placeholder='Last name' />
                <input
                    type="email"
                    value={this.state.username}
                    onChange={this.onChange('username')}
                    placeholder='Email' />
                <input
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange('password')}
                    placeholder='Password' />
                <div className='date_input_row'>
                    <div id="day_dropdown" className="dropdown">
                        <button
                            className="dropbtn"
                            onClick={this.toggleDropdown('day_content')}
                        >Day</button>
                        <div id="day_content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <div id="month_dropdown" className="dropdown">
                        <button
                            className="dropbtn"
                            onClick={this.toggleDropdown('month_content')}
                        >Month</button>
                        <div id="month_content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <div id="year_dropdown" className="dropdown">
                        <button
                            className="dropbtn"
                            onClick={this.toggleDropdown('year_content')}>Year</button>
                        <div id="year_content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </div>
                <div className='gender_select_row'>
                    <button
                        id='male'
                        className='gender_button'>
                        Male
                    </button>
                    <button
                        id='female'
                        className='gender_button'>
                        Female
                    </button>
                </div>
                <div className='country_select'>
                    <button
                        className='country_button'
                        onClick={this.toggleDropdown('country_select_content')}>
                        United States
                    </button>
                    <div id='country_select_content'>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div className='notification_subscription_row'>
                    <input
                        type="checkbox"
                        className='notification_checkbox' />
                    <div className='notification_speal'>
                        Yes, I would like to receive by email the latest news, innovation updates, and offers from TrackMyTrel and Hyper Armour.
                    </div>
                </div>
                <div className='privacy_and_terms_links'>
                    <div>
                        By signing up with MapMyRun, you agree to our Privacy Policy & Terms of Use.
                    </div>
                </div>
                <button
                    onClick={this.submit}
                    className='submit_session_form' >
                    {this.props.type.toUpperCase()}
                </button>
            </div>

        return (
            <form id='session_form'>
                {signupForm}

            </form>
        )
    }

}