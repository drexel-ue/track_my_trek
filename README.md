# [TrackMyTrek](https://track-my-trek.herokuapp.com/#/)

## Technologies

- PostgresQL
- Express
- React.js
- Node.js
- Google Maps API
- GraphHopper Routing API

### The Gist

TrackMyTrek is a Ruby on Rails / React clone of [MapMyRun](https://mapmyrun.com). Users will be able to track journies
on maps and view them again later.

### Demo Pics

#### \* ![Landing Page](https://github.com/drexel-ue/track_my_trek/blob/master/landing_page.png)

#### \* ![Previous Treks](https://github.com/drexel-ue/track_my_trek/blob/master/prev_treks.png)

#### \* ![Create Trek](https://github.com/drexel-ue/track_my_trek/blob/master/create_trek.png)

#### \* ![Trek Show](https://github.com/drexel-ue/track_my_trek/blob/master/trek_show.png)

#### Custom Parsing Algorithm

```javascript
plotMarkerandDrawPoly(latLng, map) {
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
              url: "https://image.flaticon.com/icons/svg/1576/1576216.svg",
              scaledSize: new google.maps.Size(20, 20),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(10, 10)
            };
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
              strokeColor: "green",
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
          url: "https://image.flaticon.com/icons/svg/1576/1576216.svg",
          scaledSize: new google.maps.Size(20, 20),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(10, 10)
        };
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
```
