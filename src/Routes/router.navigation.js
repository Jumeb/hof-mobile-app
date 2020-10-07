import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import {
  LoginScreen,
  SplashScreen,
  WelcomeScreen,
  SignUpScreen,
  Home,
} from '../Screens/index';

const Routes = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="splash" component={SplashScreen} hideNavBar />
        <Scene key="Welcome" component={WelcomeScreen} hideNavBar />
        <Scene key="Login" component={LoginScreen} hideNavBar />
        <Scene key="SignUp" component={SignUpScreen} hideNavBar />
        <Scene key="Home" component={Home} hideNavBar />
      </Stack>
    </Router>
  );
};

export default Routes;
