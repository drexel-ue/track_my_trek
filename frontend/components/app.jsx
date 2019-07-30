import React from 'react';
// import LoginFormContainer from './login_form_container';
// import SignupFormContainer from './signup_form_container';
import NavBar from './nav_bar/nav_bar';
import { Route } from 'react-router-dom';
import Arbitrary from './app_container'
import LandingPage from './landing_page';

const App = () => (
  <div>
    <header>
      <NavBar />
    </header>

    <Route exact path='/' component={LandingPage} />

    {/* < Arbitrary path="/login" component={LoginFormContainer}/>
    < Arbitrary path="/signup" component={SignupFormContainer}/> */}

  </div>
);

export default App;