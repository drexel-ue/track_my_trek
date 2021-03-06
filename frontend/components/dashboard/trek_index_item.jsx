import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TrekIndexItem extends Component {
  constructor(props) {
    super(props);

    this.state = { trek: props.trek };
  }

  componentDidMount() {
    const mapOptions = {
      center: {
        lat: Number.parseFloat(
          this.state.trek.points[
            Math.round((this.state.trek.points.length - 1) / 2)
          ].lat
        ),
        lng: Number.parseFloat(
          this.state.trek.points[
            Math.round((this.state.trek.points.length - 1) / 2)
          ].lng
        )
      },
      zoom: 13,
      mapTypeControl: false
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    let coords = [];
    let that = this;
    const waypoints = this.state.trek.waypoints;

    waypoints.forEach((waypoint, index) => {
      let image = {
        url: "https://image.flaticon.com/icons/svg/1576/1576216.svg",
        scaledSize: new google.maps.Size(
          index == 0 || index == waypoints.length - 1 ? 20 : 0,
          index == 0 || index == waypoints.length - 1 ? 20 : 0
        ),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(10, 10)
      };

      new google.maps.Marker({
        position: {
          lat: Number.parseFloat(waypoint.lat),
          lng: Number.parseFloat(waypoint.lng)
        },
        icon: image,
        map: that.map
      });
    });

    this.state.trek.points.forEach(point => {
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
          <div className="map_name">{this.state.trek.map_name}</div>
          <div className="label">BEGINS IN: </div>
          <div className="body">{this.state.trek.begins_in}</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <Link to={`/treks/${this.state.trek.id}`} className="trek_index_item">
        <div className="map_container" ref={map => (this.mapNode = map)} />
        {this.writtenDeats()}
      </Link>
    );
  }
}
