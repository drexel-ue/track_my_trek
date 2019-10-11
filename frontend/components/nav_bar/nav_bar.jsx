import React from "react";
import HomeButton from "./home_button";
import LoginButtonContainer from "./login_button_container";
import SignupButtonContainer from "./signup_button_container";
import NavBarItemContainer from "./nav_bar_item_container";
import NavMenuButtonContainer from "./nav_menu_button_container";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  authButtons() {
    return this.props.history.location.pathname != "/login" &&
      this.props.history.location.pathname != "/signup" ? (
      <div className="session_buttons">
        <LoginButtonContainer key="login_button" placement="nav" />
        <SignupButtonContainer key="signup_button" placement="nav" />
      </div>
    ) : (
      <div></div>
    );
  }

  render() {
    const titles = ["CREATE", "TREKS"];

    const style =
      this.props.location.pathname == "/treks/create"
        ? {
            marginBottom: "3px",
            boxShadow: "0 2px 2px rgba(0, 0, 0, 0.2)"
          }
        : {};

    return (
      <div id="nav_bar" style={style}>
        <ul>
          <HomeButton />
          {this.props.loggedIn ? (
            titles.map((title, index) => (
              <NavBarItemContainer title={title} key={index} />
            ))
          ) : (
            <div />
          )}
          {this.props.loggedIn ? (
            <NavMenuButtonContainer />
          ) : (
            this.authButtons()
          )}
        </ul>
      </div>
    );
  }
}
