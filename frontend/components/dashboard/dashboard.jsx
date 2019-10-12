import React from "react";
import TrekIndexItem from "./trek_index_item";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { treks: props.treks || [] };
  }

  componentDidMount() {
    this.props.fetchTreks().then(({ treks }) => this.setState({ treks }));
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
          <div className="main_content">
            {this.state.treks.map(trek => (
              <div key={trek.id}>
                <TrekIndexItem trek={trek} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
