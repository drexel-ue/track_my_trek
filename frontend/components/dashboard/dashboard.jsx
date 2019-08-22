import React from "react";
import DashTabs from "./dash_tabs";

export default class Dashboard extends React.Component {
  pushTo(to) {
    return event => {
      event.preventDefault();
      this.props.history.push(to);
    };
  }

  persistStlyeSelect(match) {
    return this.props.location.pathname == match
      ? {
          borderTop: "3px solid #2F98D9",
          height: "48px",
          color: "black",
          backgroundColor: "white"
        }
      : {};
  }

  persist() {
    return (
      <div>
        <ul className="nav_row">
          <div
            style={this.persistStlyeSelect("/dashboard/activity")}
            onClick={this.pushTo("/dashboard/activity")}
          >
            ACTIVITY FEED
          </div>
          <div
            style={this.persistStlyeSelect("/dashboard/user")}
            onClick={this.pushTo("/dashboard/user")}
          >
            MY DASHBOARD
          </div>
          <div
            style={this.persistStlyeSelect("/dashboard/qs")}
            onClick={this.pushTo("/dashboard/qs")}
          >
            24 / 7
          </div>
        </ul>
      </div>
    );
  }

  render() {
    return <div className="dashboard">{this.persist()}</div>;
  }
}
