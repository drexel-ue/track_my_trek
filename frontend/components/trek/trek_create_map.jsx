
import React from 'react'
import bootPrint from '../consts/boot_print'

export default class TrekCreateMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = { leftStep: true }
    }
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
        let image = {
            url: this.state.leftStep ?
                'https://image.flaticon.com/icons/svg/2/2058.svg'
                : 'https://image.flaticon.com/icons/svg/1/1390.svg',
            scaledSize: new google.maps.Size(20, 20),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(10, 10)
        }
        this.setState({ leftStep: !this.state.leftStep })
        let marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: image
        });
    }

    render() {
        return <div id='map_container' ref={map => this.mapNode = map}></div>
    }
}