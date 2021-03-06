import { connect } from "react-redux";
import { withRouter, Route, Redirect } from "react-router-dom";
import React from "react";

const msp = ({ session }) => ({
  userId: session.userId
});
const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

const Arbitrary = props => {
  let { userId, component: Component, path, exact } = props;
  return (
    <Route
      exact={exact || false}
      path={path}
      render={props =>
        !userId ? (
          <Component {...props} />
        ) : (
          <Redirect to="/dashboard/activity" />
        )
      }
    />
  );
};

export default withRouter(
  connect(
    msp,
    mdp
  )(Arbitrary)
);
