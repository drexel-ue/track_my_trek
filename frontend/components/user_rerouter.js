import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom'
import React from 'react'

const msp = ({ session }) => ({
    userId: session.userId
})
const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

const Arbitrary = (props) => {
    let { userId, component: Component, path } = props
    return < Route
        path={path}
        render={(props) => !userId ? <Component {...props} /> : <Redirect to="/" />} />
}

export default withRouter(connect(msp, mdp)(Arbitrary));