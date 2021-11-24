import React, {Component, useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './Splash.style';
import colorScheme from '../../../resources/Colors/theme';
import {Actions} from 'react-native-router-flux';

class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      Actions.welcome();
    }, 2500);
  }

  render() {
    return (
      <LinearGradient
        style={styles.mainContainer}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[colorScheme.TERTIARY_COLOR, colorScheme.SECONDARY_COLOR]}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../resources/images/favicon.png')}
            style={styles.appLogo}
          />
        </View>
        <Text style={styles.madeText}>Made by JB Inc</Text>
      </LinearGradient>
    );
  }
}

export default SplashScreen;
