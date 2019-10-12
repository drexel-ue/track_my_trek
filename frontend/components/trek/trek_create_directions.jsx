import React from "react";
import TrekStep from "./trek_create_step";

export default class TrekDirections extends React.Component {
  componentWillUnmount() {
    this.props.unsetSteps();
  }

  render() {
    return (
      <div className="route_directions">
        <div className="title">Trek Steps</div>
        <ul>
          {Object.values(this.props.steps).map((step, index) => (
            <li key={index}>
              <TrekStep step={step} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
