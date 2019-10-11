import React from "react";

export default class TrekCreateSearcbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: "", goingTo: "" };
  }

  handleInput(event) {
    event.preventDefault();
    this.setState({ location: event.target.value });
  }

  render() {
    return (
      <div className="search_bar">
        <input
          type="text"
          onChange={this.handleInput}
          placeholder="Where'd you Trek?"
        />
        <button id="search_button">Search</button>
        <button className="expand_button">X</button>
        <div className="show_get_directions"></div>
      </div>
    );
  }
}
