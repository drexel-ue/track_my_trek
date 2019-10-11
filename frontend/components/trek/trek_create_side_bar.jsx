import React from "react";
import TrekCreateSearcbar from "./trek_create_searchbar";
import TrekDetailsContainer from "./trek_details_container";
import TrekDirectionsContainer from "./trek_create_directions_container";

export default () => (
  <div className="create_sidebar">
    <div className="side_bar_title">Choose Trek Location</div>
    <TrekCreateSearcbar />
    <TrekDetailsContainer />
    <TrekDirectionsContainer />
  </div>
);
