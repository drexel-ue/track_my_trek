import React from "react";
import { Link } from "react-router-dom";

export default class TrekShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trek: this.props.trek,
      waypoints: this.props.waypoints,
      points: this.props.points,
      user: this.props.user
    };
  }

  componentDidMount() {
    this.props.fetchTrek(this.props.match.params.id).then(response =>
      this.setState(
        {
          trek: response.trek.trek,
          waypoints: response.waypoints.waypoints,
          points: response.points.points,
          user: response.user.user
        },
        () => {
          const mapOptions = {
            center: {
              lat: Number.parseFloat(
                this.state.points[
                  Math.round((this.state.points.length - 1) / 2)
                ].lat
              ),
              lng: Number.parseFloat(
                this.state.points[
                  Math.round((this.state.points.length - 1) / 2)
                ].lng
              )
            },
            zoom: 14
          };

          this.map = new google.maps.Map(this.mapNode, mapOptions);

          let coords = [];
          let that = this;

          this.state.waypoints.forEach(waypoint => {
            let image = {
              url: "https://image.flaticon.com/icons/svg/1576/1576216.svg",
              scaledSize: new google.maps.Size(20, 20),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(10, 10)
            };

            new google.maps.Marker({
              animation: google.maps.Animation.BOUNCE,
              position: {
                lat: Number.parseFloat(waypoint.lat),
                lng: Number.parseFloat(waypoint.lng)
              },
              icon: image,
              map: that.map
            });
          });

          this.state.points.forEach(point => {
            coords.push({
              lat: Number.parseFloat(point.lat),
              lng: Number.parseFloat(point.lng)
            });
          });

          const polyPath = new google.maps.Polyline({
            path: coords,
            geodesic: true,
            strokeColor: "green",
            strokeOpacity: 1.0,
            strokeWeight: 2
          });

          polyPath.setMap(that.map);
        }
      )
    );
  }

  navigation() {
    return (
      <div className="navigation">
        <Link to="/dashboard/activity">Home</Link> > Trek Details
      </div>
    );
  }

  mapName() {
    return <div className="map_name">{this.state.trek.map_name}</div>;
  }

  writtenDeats() {
    return (
      <div className="written_deats">
        <div className="distance_and_climb">
          <div className="the_distance">
            <div>Distance</div>
            <div className="distance_total">{this.state.trek.distance}</div>
            <div>miles</div>
          </div>
          <div className="the_climb">
            <div>climb</div>
            <div className="climb_total">{this.state.trek.climb} ft</div>
          </div>
        </div>
        <div className="description">
          <div className="label">BEGINS IN: </div>
          <div className="body">{this.state.trek.begins_in}</div>
          <div className="label">CREATED BY: </div>
          <div className="body">
            {`${this.state.user.first_name} ${this.state.user.last_name}`}
          </div>
          <div className="label">DESCRIPTION: </div>
          <div className="body">{this.state.trek.description}</div>
          <div className="label">ACTIVITY: </div>
          <div className="body">{this.state.trek.activity}</div>
        </div>
      </div>
    );
  }

  mapView() {
    return <div id="map_container" ref={map => (this.mapNode = map)} />;
  }

  spacerDiv() {
    return <div className="spacer_div" />;
  }

  render() {
    return (
      <div className="trek_show">
        <div className="main_content">
          {this.navigation()}
          {this.mapName()}
          {this.writtenDeats()}
          {this.mapView()}
        </div>
      </div>
    );
  }
}
