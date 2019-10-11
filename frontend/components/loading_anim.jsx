import React, { Component } from "react";

export default class LoadingAnim extends Component {
  constructor() {
    super();
    this.state = { index: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let newIndex;

      if (this.state.index === 2) newIndex = 0;
      if (this.state.index === 1) newIndex = 2;
      if (this.state.index === 0) newIndex = 1;

      this.setState({ index: newIndex });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  visibility(index) {
    if (index === this.state.index) return { opacity: "0" };
  }

  render() {
    return (
      <div className="loading_anim">
        <img
          src="https://www.jing.fm/clipimg/full/24-247097_boot-clip-art-outdoor-boots-transprent-png-boot.png"
          alt="boot"
          style={this.visibility(0)}
        />
        <img
          style={this.visibility(1)}
          src="https://www.jing.fm/clipimg/full/24-247097_boot-clip-art-outdoor-boots-transprent-png-boot.png"
          alt="boot"
        />
        <img
          style={this.visibility(2)}
          src="https://www.jing.fm/clipimg/full/24-247097_boot-clip-art-outdoor-boots-transprent-png-boot.png"
          alt="boot"
        />
      </div>
    );
  }
}
