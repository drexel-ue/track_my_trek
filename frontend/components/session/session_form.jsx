import React from 'react'
import countries from '../consts/countries'

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.user
        this.submit = this.submit.bind(this)
        window.addEventListener('click', this.removeShow)
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
            event.stopPropagation()
            document.getElementById(field).classList.toggle('show')
        }
    }

    removeShow() {
        const els = document.getElementsByClassName('show')
        for (let index = 0; index < els.length; index++) {
            els[index].classList.remove('show')
        }
    }

    setGender(value) {
        return event => {
            event.preventDefault()
            this.setState({ 'gender': value })
        }
    }

    pickDate(field, value) {
        return (event) => {
            event.preventDefault()
            this.setState({ [field]: value })
        }
    }

    render() {
        const days = this.state.birthMonth === undefined ?
            [...Array(32).keys()].slice(1) :
            [1, 3, 5, 7, 8, 10, 12]
                .includes(this.state.birthMonth) ? [...Array(32).keys()].slice(1) :
                [4, 6, 9, 11]
                    .includes(this.state.birthMonth) ? [...Array(31).keys()].slice(1) :
                    [...Array(29).keys()].slice(1)

        const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ]

        const years = [...Array(109).keys()].reverse()


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
                        >{this.state.birthDay}</button>
                        <div id="day_content">
                            {days.map(day =>
                                <button
                                    key={day}
                                    onClick={this.pickDate('birthDay', day)}>
                                    {day}
                                </button>
                            )}
                        </div>
                    </div>
                    <div id="month_dropdown" className="dropdown">
                        <button
                            className="dropbtn"
                            onClick={this.toggleDropdown('month_content')}
                        >{months[this.state.birthMonth - 1] || 'Month'}</button>
                        <div id="month_content">
                            {months.map((month, index) =>
                                <button
                                    key={index + 1}
                                    onClick={this.pickDate('birthMonth', index + 1)}>
                                    {month}
                                </button>
                            )}
                        </div>
                    </div>
                    <div id="year_dropdown" className="dropdown">
                        <button
                            className="dropbtn"
                            onClick={this.toggleDropdown('year_content')}>{this.state.birthYear}</button>
                        <div id="year_content">
                            {years.map((year) =>
                                <button
                                    key={year}
                                    onClick={this.pickDate('birthYear', year + 1899)}>
                                    {year + 1899}
                                </button>
                            )}
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
                        className='gender_button'
                        onClick={this.setGender('male')}>
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
                        {countries.map(country => country)}
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