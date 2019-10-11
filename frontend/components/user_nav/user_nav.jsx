import React from "react";
import { Link } from "react-router-dom";

export default class UserNav extends React.Component {
  render() {
    return this.props.userId &&
      this.props.location.pathname != "/treks/create" ? (
      <div className="user_nav">
        <ul>
          <Link to="/treks/create">Track a Trek</Link>
        </ul>
      </div>
    ) : (
      <div></div>
    );
  }
}
