import { connect } from 'react-redux';
// import LoginFormContainer from './login_form_container';
// import SignupFormContainer from './signup_form_container';
import { withRouter, Route, Redirect } from 'react-router-dom'
import React from 'react'

const msp = ({ session }) => ({
    userId: session.userId
})
const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

const Arbitrary = (props) => {
    let { user, component: Component, path } = props
    return < Route
        path={path}
        render={(props) => !user ? <Component {...props} /> : <Redirect to="/" />} />
}

export default withRouter(connect(msp, mdp)(Arbitrary));