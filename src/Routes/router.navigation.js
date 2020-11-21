import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import {
  LoginScreen,
  SplashScreen,
  WelcomeScreen,
  SignUpScreen,
  Home,
  Shop,
  Event,
  Reviews,
  Settings,
} from '../Screens';
import {EventDetails} from '../sections';
import {Header, TabBarTwo, NavBar} from '../Components';
import styles from './routes.style';

const Routes = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="main" tabs tabBarComponent={TabBarTwo}>
          <Scene key="events" hideNavBar>
            <Scene
              key="events"
              component={Event}
              navBar={NavBar}
              title="Events"
            />
            <Scene
              key="eventDetails"
              component={EventDetails}
              navBar={NavBar}
              title="Event Details"
            />
          </Scene>
          <Scene key="bakers" hideNavBar>
            <Scene key="bakers" component={Home} navBar={NavBar} title="Home" />
            <Scene key="shop" component={Shop} navBar={NavBar} title="Pantry" />
          </Scene>
          <Scene
            key="review"
            component={Reviews}
            navBar={NavBar}
            title="Reviews"
          />
          <Scene
            key="settings"
            component={Settings}
            navBar={NavBar}
            title="Settings"
          />
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
