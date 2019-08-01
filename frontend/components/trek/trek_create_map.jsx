
import React from 'react'

export default class TrekCreateMap extends React.Component {
    componentDidMount() {
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 },
            zoom: 13
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);

        this.map.addListener('click', (event) => {
            this.placeMarkerAndPanTo(event.latLng, this.map);
        });
    }

    placeMarkerAndPanTo(latLng, map) {
        let marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
    }

    render() {
        return <div id='map_container' ref={map => this.mapNode = map}></div>
    }
}