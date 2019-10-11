import React, { Component } from "react";

export default class LoadingAnim extends Component {
  constructor() {
    super();
    this.state = { index: 0 };
  }

  //   componentDidMount() {
  //     this.timeout = setTimeout(() =>
  //       this.setState({ index: (this.state.index + 1) % 3 }, 250)
  //     );
  //   }

  //   componentWillUnmount() {
  //     clearTimeout(this.timeout);
  //   }

  visibility(index) {
    if (index !== this.state.index % 3) return "hidden";
    return "";
  }

  render() {
    return (
      <div className="loading_anim">
        <img
          src="https://www.jing.fm/clipimg/full/24-247097_boot-clip-art-outdoor-boots-transprent-png-boot.png"
          alt="boot"
        />
        <img
          className="raised_boot"
          src="https://www.jing.fm/clipimg/full/24-247097_boot-clip-art-outdoor-boots-transprent-png-boot.png"
          alt="boot"
        />
        <img
          src="https://www.jing.fm/clipimg/full/24-247097_boot-clip-art-outdoor-boots-transprent-png-boot.png"
          alt="boot"
        />
      </div>
    );
  }
}
