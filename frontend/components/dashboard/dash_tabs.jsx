import React from "react";
import DashTabContainer from "./dash_tab_container";

export default () => {
  const tabs = ["ACTIVITY FEED", "MY DASHBOARD", "24 / 7"];

  return (
    <div className="dash_tabs">
      {tabs.map(title => (
        <DashTabContainer title={title} key={title} />
      ))}
    </div>
  );
};
