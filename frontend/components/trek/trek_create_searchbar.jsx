import React from "react";

export default class TrekCreateSearcbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: "" };
    this.handleInput = this.handleInput.bind(this);
    this.geocode = this.geocode.bind(this);
  }

  handleInput(event) {
    event.preventDefault();
    this.setState({ location: event.target.value });
  }

  geocode(event) {
    event.preventDefault();
    if (this.state.location.length > 0)
      $.ajax({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.location
          .split(" ")
          .join("+")}&key=AIzaSyDtBUQe2amSSfBXuvk3eS0nkhtokYvCAas`
      }).then(({ results }) => {
        const location = results[0].geometry.location;
        if (location) this.props.map.panTo(location);
      });
  }

  render() {
    return (
      <div className="search_bar">
        <input
          type="text"
          onChange={this.handleInput}
          placeholder="Where'd you Trek?"
        />
        <button onClick={this.geocode} id="search_button">
          Search
        </button>
        <button className="expand_button">X</button>
        <div className="show_get_directions"></div>
      </div>
    );
  }
}
