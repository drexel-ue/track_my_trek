import React from "react";

export default class DemoLogin extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login(event) {
    event.preventDefault();
    this.props.login(this.props.user);
  }

  toggleShow(event) {
    event.preventDefault();
    document.getElementById("demo_switch_contents").classList.toggle("hide");
  }

  render() {
    return (
      <div className="demo_login" onClick={this.login}>
        DEMO LOGIN
      </div>
    );
  }
}
