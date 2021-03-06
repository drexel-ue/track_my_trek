import React from "react";
import { merge } from "lodash";
import LoadingAnim from "../loading_anim";

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
    if (
      this.state.mapName.length > 0 &&
      this.state.activity.length > 0 &&
      this.props.waypoints.length > 1
    ) {
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
                  this.setState({ loading: true });
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
    } else {
      if (this.state.mapName.length === 0) alert("Please name this Trek");
      else if (this.state.activity.length === 0)
        alert("Please add an Activity (swimming, hiking, yadda yadda...)");
      else if (this.props.waypoints.length < 2)
        alert(
          `Please add at least ${2 -
            this.props.waypoints.length} waypoint(s). Thank you.`
        );
    }
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
              placeholder="What was the Activity?"
            />
            <input
              placeholder="Describe this Trek"
              onChange={this.handleInput("description")}
            />
            {this.state.loading ? (
              <LoadingAnim />
            ) : (
              <button className="save_button" onClick={this.saveRoute}>
                SAVE TREK
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
