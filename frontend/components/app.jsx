import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Route } from 'react-router-dom';
import UserRerouter from './user_rerouter'
import LandingPage from './landing_page';
import SignupFormContainer from './session/signup_form_conainter'
import LoginFormContainer from './session/login_form_container'
import DashboardContainer from './dashboard/dashboard_container';
import TrekCreate from './trek/trek_create';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>

    <Route exact path='/' component={LandingPage} />

    <Route path='/dashboard' component={DashboardContainer} />

    <Route path='/treks/create' component={TrekCreate} />

    < UserRerouter path="/login" component={LoginFormContainer} />
    < UserRerouter path="/signup" component={SignupFormContainer} />

  </div>
);

export default App;