import React, {Component} from 'react';
import {Image, SafeAreaView, StatusBar, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './Splash.style';
import colorScheme from '../../../resources/Colors/theme';
import {Actions} from 'react-native-router-flux';
import {Text} from '../../Components';

class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      Actions.welcome();
    }, 2500);
  }

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar animated={true} translucent={true} />
        <LinearGradient
          style={styles.mainContainer}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[colorScheme.TERTIARY_COLOR, colorScheme.SECONDARY_COLOR]}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../resources/images/logo-1.png')}
              style={styles.appLogo}
            />
            <Text style={styles.appName}>Flavours</Text>
          </View>
          <Text style={styles.madeText}>JB Inc.</Text>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

export default SplashScreen;
