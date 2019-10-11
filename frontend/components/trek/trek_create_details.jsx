import React from "react";
import { merge } from "lodash";

export default class TrekDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapName: "",
      activity: "",
      description: undefined,
      climb: 0,
      distance: 0,
      beginsIn: ""
    };
    this.router = new GraphHopper.Routing({
      key: "712bf675-0c2c-4c45-9e79-c6b2731f54ad",
      vehicle: "foot",
      elevation: false
    });
    this.saveRoute = this.saveRoute.bind(this);
  }

  handleInput(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  saveRoute(event) {
    let that = this;
    event.preventDefault();
    this.props.waypoints.forEach(waypoint => {
      this.router.addPoint(new GHInput(waypoint.lat, waypoint.lng));
    });
    this.router.doRequest().then(json => {
      that.setState(
        {
          distance: json.paths[0].distance / 160.9344,
          climb: json.paths[0].ascend * 3.281
        },
        () => {
          this.props.fetchLocation(this.props.waypoints[0]).then(response => {
            const result = response.hits[0];
            this.setState(
              {
                beginsIn: `${result.city}, ${result.state}, ${result.country}`
              },
              () => {
                this.props
                  .saveRoute(
                    merge({}, this.state, {
                      waypoints: this.props.waypoints,
                      points: this.props.points
                    })
                  )
                  .then(({ trek }) => {
                    this.props.history.push(`/treks/${trek.id}`);
                  });
              }
            );
          });
        }
      );
    });
  }

  render() {
    return (
      <div className="trek_details">
        <div className="details_title">Trek Details</div>
        <div id="trek_details_content">
          <input
            type="text"
            value={this.state.mapName}
            onChange={this.handleInput("mapName")}
            placeholder="Name this Trek"
          />
          <div className="activity_selection">
            <input
              type="text"
              value={this.state.activity}
              onChange={this.handleInput("activity")}
              placeholder="Choose an Activity"
            />
            <input
              placeholder="Describe this Trek"
              onChange={this.handleInput("description")}
            />
            <button className="save_button" onClick={this.saveRoute}>
              SAVE TREK
            </button>
          </div>
        </div>
      </div>
    );
  }
}
