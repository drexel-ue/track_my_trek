import React from "react";
import SideBarInfoCard from "./side_bar_info_card_container";

export default class Dashboard extends React.Component {
  pushTo(to) {
    return event => {
      event.preventDefault();
      this.props.history.push(to);
    };
  }

  render() {
    return (
      <div className="dashboard">
        <div className="switch">
          <div className="main_content" />
        </div>
      </div>
    );
  }
}
