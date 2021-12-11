import React, {Component} from 'react';
import {Image, SafeAreaView, StatusBar, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as RNLocalize from 'react-native-localize';

import styles from './Splash.style';
import colorScheme from '../../../resources/Colors/theme';
import {Text} from '../../Components';
import {setLanguage} from '../../redux/actions/TranslationAction';
import {Storage} from '../../utils';

let currentDeviceLocale = RNLocalize.getLocales()[0];

class SplashScreen extends Component {
  constructor() {
    super();
    this.state = {
      isNotFirstTime: false,
    };
  }

  componentDidMount() {
    this.SetDeviceLanguage();

    setTimeout(() => {
      Actions.welcome();
    }, 2500);
  }

  SetDeviceLanguage = async () => {
    try {
      var locale = await Storage.load({key: 'LOCALE'});
      if (locale && locale !== currentDeviceLocale.languageCode) {
        this.props.setLanguage(locale);
      } else {
        let deviceLocale = currentDeviceLocale.languageCode;
        this.props.setLanguage(deviceLocale);
      }
    } catch (e) {
      var locale = currentDeviceLocale.languageCode;
      this.props.setLanguage(locale);
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar
          animated={true}
          translucent={true}
          backgroundColor={'transparent'}
        />
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
          <Text style={styles.madeText}>
            {this.props.i18n.t('words.from')} JB Inc.
          </Text>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({i18n}) => {
  return {
    i18n: i18n.i18n,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setLanguage}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
