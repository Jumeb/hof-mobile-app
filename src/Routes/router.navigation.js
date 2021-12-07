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
  Cart,
  PastryInfo,
  ChefInfo,
} from '../Screens';
import {EventDetails} from '../sections';
import {TabBarTwo, TabBar} from '../Components';

const Routes = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="splash" component={SplashScreen} hideNavBar />
        <Scene key="welcome" component={WelcomeScreen} hideNavBar />
        <Scene key="Login" component={LoginScreen} hideNavBar />
        <Scene key="SignUp" component={SignUpScreen} hideNavBar />
        <Scene key="main" tabs tabBarComponent={TabBar} hideNavBar>
          <Scene key="bakers" hideNavBar>
            <Scene key="bakers" component={Home} title="Home" />
            <Scene key="shop" component={Shop} />
            {/* <Scene key="cart" hideNavBar> */}
            <Scene key="cart" component={Cart} />
            <Scene key="pastryInfo" component={PastryInfo} hideNavBar />
            <Scene key="chefInfo" component={ChefInfo} hideNavBar />
            {/* </Scene> */}
          </Scene>
          <Scene key="favourites" hideNavBar>
            <Scene
              key="favourites"
              component={Event}
              hideNavBar
              title="Events"
            />
            <Scene
              key="eventDetails"
              component={EventDetails}
              hideNavBar
              title="Event Details"
            />
          </Scene>
          <Scene key="review">
            <Scene key="review" component={Review} hideNavBar title="Review" />
            <Scene
              key="reviews"
              component={Reviews}
              hideNavBar
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
      </Stack>
    </Router>
  );
};

export default Routes;
