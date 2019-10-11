import React from "react";

export default class TrekCreateMap extends React.Component {
  constructor(props) {
    super(props);
    this.leftStep = true;
    this.router = new GraphHopper.Routing({
      key: "712bf675-0c2c-4c45-9e79-c6b2731f54ad",
      vehicle: "foot",
      elevation: false
    });
    this.state = { waypoints: [] };
  }
  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 15
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    this.map.addListener("click", event => {
      this.placeMarkerAndPanTo(event.latLng, this.map);
    });
  }

  placeMarkerAndPanTo(latLng, map) {
    if (this.router.points.length < 5) {
      this.router.addPoint(new GHInput(latLng.lat(), latLng.lng()));
      const that = this;
      if (this.router.points.length > 1) {
        this.router
          .doRequest()
          .then(json => {
            let coords = [];
            json.paths[0].points.coordinates.forEach(point => {
              coords.push({
                lat: point[1],
                lng: point[0]
              });
            });

            const image = {
              url: that.leftStep
                ? "https://image.flaticon.com/icons/svg/2/2058.svg"
                : "https://image.flaticon.com/icons/svg/1/1390.svg",
              scaledSize: new google.maps.Size(20, 20),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(10, 10)
            };
            that.leftStep = !that.leftStep;
            const marker = new google.maps.Marker({
              animation: google.maps.Animation.BOUNCE,
              position: latLng,
              icon: image,
              map
            });

            that.setState({ points: coords }, () => {
              const waypoints = [
                ...that.state.waypoints,
                { lat: marker.position.lat(), lng: marker.position.lng() }
              ];
              that.setState({ waypoints }, () => {
                that.props.setWaypoints(that.state.waypoints);
                that.props.setPoints(that.state.points);
              });
            });

            const polyPath = new google.maps.Polyline({
              path: coords,
              geodesic: true,
              strokeColor: "#FF0000",
              strokeOpacity: 1.0,
              strokeWeight: 2
            });

            polyPath.setMap(map);

            that.props.handleNewSteps(json.paths[0].instructions);
          })
          .catch(err => {
            console.error(err.message);
            that.props.handleErrors([err.message]);
          });
      } else {
        const image = {
          url: that.leftStep
            ? "https://image.flaticon.com/icons/svg/2/2058.svg"
            : "https://image.flaticon.com/icons/svg/1/1390.svg",
          scaledSize: new google.maps.Size(20, 20),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(10, 10)
        };
        that.leftStep = !that.leftStep;
        const marker = new google.maps.Marker({
          animation: google.maps.Animation.BOUNCE,
          position: latLng,
          icon: image,
          map
        });

        that.setState(
          {
            points: [{ lat: marker.position.lat(), lng: marker.position.lng() }]
          },
          () => {
            const waypoints = [
              ...that.state.waypoints,
              { lat: marker.position.lat(), lng: marker.position.lng() }
            ];
            that.setState({ waypoints }, () => {
              that.props.setWaypoints(that.state.waypoints);
              that.props.setPoints(that.state.points);
            });
          }
        );
      }
    } else {
      alert(
        "As this is a demo, you may only make Treks with less than six waypoints. Thank you."
      );
    }
  }

  render() {
    return <div id="map_container" ref={map => (this.mapNode = map)}></div>;
  }
}
