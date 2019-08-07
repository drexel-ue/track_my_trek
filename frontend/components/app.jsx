import React from 'react'
import NavBarContainer from './nav_bar/nav_bar_container'
import { Route, Switch } from 'react-router-dom'
import UserRerouter from './user_rerouter'
import LandingPage from './landing_page'
import SignupFormContainer from './session/signup_form_conainter'
import LoginFormContainer from './session/login_form_container'
import DashboardContainer from './dashboard/dashboard_container'
import TrekShowContainer from './trek/trek_show_container'
import TrekCreate from './trek/trek_create'
import NonUserRerouter from './non_user_rerouter';
import UserNavContainer from './user_nav/user_nav_container';
import FriendsContainer from './friends/friends_container';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
      <UserNavContainer />
    </header>

    <Switch>
      <UserRerouter exact={true} path='/' component={LandingPage} />

      <NonUserRerouter path='/dashboard' component={DashboardContainer} />

      <NonUserRerouter path='/treks/create' component={TrekCreate} />

      <NonUserRerouter path='/treks/:id' component={TrekShowContainer} />

      < UserRerouter path='/login' component={LoginFormContainer} />

      < UserRerouter path='/signup' component={SignupFormContainer} />

      <NonUserRerouter path='/friends' component={FriendsContainer} />
    </Switch>


  </div>
);

export default App;