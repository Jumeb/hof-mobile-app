import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import SplashScreen from '../Screens/SplashScreen/splash.screen';

const Routes = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="splash" component={SplashScreen} hideNavBar />
      </Stack>
    </Router>
  );
};

export default Routes;
