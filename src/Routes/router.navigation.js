import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import {
  LoginScreen,
  SplashScreen,
  WelcomeScreen,
  SignUpScreen,
  Home,
  Shop,
} from '../Screens';

import {Header} from '../Components';

const Routes = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="main">
          <Scene key="Home" component={Home} navBar={Header} title="Home" />
          <Scene key="Shop" component={Shop} navBar={Header} title="Pantry" />
        </Scene>
        <Scene key="onboard" hideNavBar>
          <Scene key="splash" component={SplashScreen} />
          <Scene key="Welcome" component={WelcomeScreen} />
          <Scene key="Login" component={LoginScreen} />
          <Scene key="SignUp" component={SignUpScreen} />
        </Scene>
      </Stack>
    </Router>
  );
};

export default Routes;
