import React from "react";
import { Link } from "react-router-dom";

export default class UserNav extends React.Component {
  render() {
    console.log(this.props);
    return this.props.userId ? (
      <div className="user_nav">
        <ul>
          {this.props.location.pathname !== "/treks/create" ? (
            <Link to="/treks/create">Track a Trek</Link>
          ) : (
            <div />
          )}
          {this.props.location.pathname !== "/dashboard/activity" ? (
            <Link to="/dashboard/activity">View Treks</Link>
          ) : (
            <div />
          )}
        </ul>
      </div>
    ) : (
      <div />
    );
  }
}
