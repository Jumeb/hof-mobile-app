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
  Favourite,
  Order,
  Wallet,
  ForgotPassword,
  Profile,
} from '../Screens';
import {EventDetails, OrderDetails} from '../sections';
import {TabBarTwo, TabBar} from '../Components';

const Routes = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="splash" component={SplashScreen} hideNavBar />
        <Scene key="welcome" component={WelcomeScreen} hideNavBar />
        <Scene key="Login" component={LoginScreen} hideNavBar />
        <Scene key="forgotPassword" component={ForgotPassword} hideNavBar />
        <Scene key="SignUp" component={SignUpScreen} hideNavBar />
        <Scene key="main" tabs tabBarComponent={TabBar} hideNavBar>
          <Scene key="home" hideNavBar>
            <Scene key="home" component={Home} title="home" />
            <Scene key="shop" component={Shop} />
            <Scene key="cart" component={Cart} />
            <Scene key="pastryInfo" component={PastryInfo} hideNavBar />
            <Scene key="chefInfo" component={ChefInfo} hideNavBar />
            <Scene key="favourites" component={Favourite} hideNavBar />
          </Scene>
          <Scene key="orders" hideNavBar>
            <Scene key="orders" component={Order} hideNavBar title="orders" />
            <Scene
              key="orderDetails"
              component={OrderDetails}
              title="orderDetails"
            />
            <Scene
              key="eventDetails"
              component={EventDetails}
              hideNavBar
              title="Event Details"
            />
          </Scene>
          <Scene key="wallet">
            <Scene key="wallet" component={Wallet} hideNavBar title="wallet" />
            <Scene
              key="reviews"
              component={Reviews}
              hideNavBar
              title="Reviews"
              inner={true}
              hideTabBar
            />
          </Scene>
          <Scene key="settings">
            <Scene
              key="settings"
              component={Settings}
              title="Settings"
              hideNavBar
            />
            <Scene
              key="profile"
              component={Profile}
              title="Profile"
              hideNavBar
            />
          </Scene>
        </Scene>
      </Stack>
    </Router>
  );
};

export default Routes;
