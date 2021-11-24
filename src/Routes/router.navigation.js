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
  Review,
} from '../Screens';
import {EventDetails} from '../sections';
import {TabBarTwo, TabBar, NavBar} from '../Components';

const Routes = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="main" tabs tabBarComponent={TabBarTwo}>
          <Scene key="bakers" hideNavBar>
            <Scene key="bakers" component={Home} navBar={NavBar} title="Home" />
            <Scene key="shop" component={Shop} navBar={NavBar} title="Pantry" />
          </Scene>
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
          <Scene key="review">
            <Scene
              key="review"
              component={Review}
              navBar={NavBar}
              title="Review"
            />
            <Scene
              key="reviews"
              component={Reviews}
              navBar={NavBar}
              title="Reviews"
              inner={true}
              hideTabBar
            />
          </Scene>
          <Scene
            key="settings"
            component={Settings}
            title="Settings"
            hideNavBar
          />
        </Scene>
        <Scene key="onboard" hideNavBar initial>
          <Scene key="splash" component={SplashScreen} />
          <Scene key="welcome" component={WelcomeScreen} />
          <Scene key="Login" component={LoginScreen} />
          <Scene key="SignUp" component={SignUpScreen} />
        </Scene>
      </Stack>
    </Router>
  );
};

export default Routes;
