import React from 'react';
import {Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './splash.style';
import colorScheme from '../../../resources/Colors/theme';

const SplashScreen = () => {
  return (
    <LinearGradient
      style={styles.mainContainer}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[colorScheme.tertiary_color, colorScheme.secondary_color]}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../resources/images/caracakes4.png')}
          style={styles.appLogo}
        />
      </View>
      <Text style={styles.madeText}>Made by JB Inc</Text>
    </LinearGradient>
  );
};

export default SplashScreen;
