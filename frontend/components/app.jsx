import React from 'react';
import NavBar from './nav_bar/nav_bar';
import { Route } from 'react-router-dom';
import UserRerouter from './user_rerouter'
import LandingPage from './landing_page';
import SignupFormContainer from './session/signup_form_conainter'
import LoginFormContainer from './session/login_form_container'

const App = () => (
  <div>
    <header>
      <NavBar />
    </header>

    <Route exact path='/' component={LandingPage} />
    {/* <Route exact path='/signup' component={SignupFormContainer} /> */}

    < UserRerouter path="/login" component={LoginFormContainer} />
    < UserRerouter path="/signup" component={SignupFormContainer} />

  </div>
);

export default App;