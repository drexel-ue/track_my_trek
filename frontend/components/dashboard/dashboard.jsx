import React from "react";
import DashTabs from "./dash_tabs";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <DashTabs />
      </div>
    );
  }
}
