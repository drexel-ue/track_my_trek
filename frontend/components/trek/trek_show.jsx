import React from 'react'
import { Link } from 'react-router-dom'

export default class TrekShow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            trek: this.props.trek,
            waypoints: this.props.waypoints,
            user: this.props.user
        }
    }

    componentDidMount() {
        this.props.fetchTrek(this.props.match.params.id)
            .then(response =>
                this.setState({
                    trek: response.trek.trek,
                    waypoints: response.waypoints.waypoints,
                    user: response.user.user
                }, () => {
                    const mapOptions = {
                        center: { lat: 37.7758, lng: -122.435 },
                        zoom: 15
                    };

                    this.map = new google.maps.Map(this.mapNode, mapOptions);
                })
            )
    }


    navigation() {
        return (
            <div className='navigation'>
                <Link to='/dashboard'>Home</Link> > <Link to='/dashboard'>My Treks</Link> > Trek Details
            </div>
        )
    }

    mapName() {
        return (
            <div className='map_name'>
                {this.state.trek.map_name}
            </div>
        )
    }

    writtenDeats() {
        return (
            <div className='written_deats'>
                <div className='distance_and_climb'>
                    <div className='the_distance'>
                        <div>Distance</div>
                        <div className='distance_total'>{this.state.trek.distance}</div>
                        <div>miles</div>
                    </div>
                    <div className='the_climb'>
                        <div>climb</div>
                        <div className='climb_total'>{this.state.trek.climb} ft</div>
                    </div>
                </div>
                <div className='description'>
                    <div className='label'>BEGINS IN: </div>
                    <div className='body'>{this.state.trek.begins_in}</div>
                    <div className='label'>CREATED BY: </div>
                    <div className='body'><Link to='/'>{this.state.user.first_name} {this.state.user.last_name}</Link></div>
                    <div className='label'>DESCRIPTION: </div>
                    <div className='body'>{this.state.trek.description}</div>
                    <div className='label'>TYPE: </div>
                    <div className='body'>{this.state.trek.activity}</div>
                </div>
            </div>

        )
    }

    privacyAndShare() {
        return (
            <div className='privacy_and_share'>
                <div className='privacy'>
                    TREK PRIVACY: <Link to='/'>{this.state.trek.privacy.toUpperCase()}</Link>
                </div>
                <div className='share'>
                    SHARE: logos
                </div>
            </div>
        )
    }

    actionButtons() {
        return (
            <div className='action_buttons'>
                <button className='actions'>ACTIONS</button>
                <button>PRINT</button>
                <button>SEND TO PHONE</button>
                <button>{/*TODO:STAR*/} BOOKMARK</button>
                <button>EDIT</button>
            </div>
        )
    }

    mapView() {
        return <div id='map_container' ref={map => this.mapNode = map}></div>
    }

    render() {
        return (
            <div className='trek_show'>
                <div className='main_content'>
                    {this.navigation()}
                    {this.mapName()}
                    {this.writtenDeats()}
                    {this.privacyAndShare()}
                    {this.actionButtons()}
                    {this.mapView()}
                </div>

                <div className='sidebar'></div>
            </div >
        )
    }
}