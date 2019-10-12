import React from "react";
import TrekCreateSearcbarContainer from "./search_bar_container";
import TrekDetailsContainer from "./trek_details_container";
import TrekDirectionsContainer from "./trek_create_directions_container";

export default () => (
  <div className="create_sidebar">
    <div className="side_bar_title">Choose Trek Location</div>
    <TrekCreateSearcbarContainer />
    <TrekDetailsContainer />
    <TrekDirectionsContainer />
  </div>
);
