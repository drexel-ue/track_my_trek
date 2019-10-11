import React from "react";

export default class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchTreks().then(treks => console.log(treks));
  }

  pushTo(to) {
    return event => {
      event.preventDefault();
      this.props.history.push(to);
    };
  }

  render() {
    return (
      <div className="dashboard">
        <div className="switch">
          <div className="main_content" />
        </div>
      </div>
    );
  }
}
