import React, {useState, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  StatusBar,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import styles from './Welcome.style';
import theme from '../../../resources/Colors/theme';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

const WelcomeScreen = (props) => {
  const {i18n} = props;
  let h = useWindowDimensions().height;
  const [image, setImage] = useState(true);
  const [icon, setIcon] = useState(
    require('../../../resources/images/favicon-1.png'),
  );

  useEffect(() => {
    const favicon = [
      {
        key: 'en',
        image: require('../../../resources/images/favicon-1.png'),
      },
      {
        key: 'fr',
        image: require('../../../resources/images/favicon-fr.png'),
      },
      {
        key: 'de',
        image: require('../../../resources/images/favicon-de.png'),
      },
    ];
    setIcon(favicon.filter((i) => i?.key === i18n?.locale)[0]?.image);
    return () => {
      setIcon(require('../../../resources/images/favicon-1.png'));
    };
  }, [i18n]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        // animated={true}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <ScrollView style={styles.container}>
        <ImageBackground
          style={[styles.welcomeImageBackground, {height: h + 30}]}
          source={
            image
              ? require('../../../resources/images/vals-3.jpg')
              : {
                  uri:
                    'https://d267afhisavhe8.cloudfront.net/wp-content/uploads/2019/03/12064238/Ballerina-themed-cake-kingdomofcakes.jpg',
                }
          }>
          <View style={styles.messageContainer}>
            <Image source={icon} style={styles.logoImage} />
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeTitle}>
                {i18n.t('phrases.welcomeToFlavours')}
              </Text>
              <Text style={styles.welcomeSlogan}>
                {i18n.t('phrases.restingPlaceOf')}
              </Text>
            </View>
            <View style={styles.actionsContainer}>
              <TouchableOpacity
                style={styles.Button}
                onPress={() => Actions.SignUp()}>
                <Text style={styles.ButtonText}>
                  {i18n.t('phrases.signUp').toUpperCase()}
                </Text>
                <Icons
                  name="ios-add-sharp"
                  size={20}
                  color={theme.WHITE_COLOR}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.Button}
                onPress={() => Actions.Login()}>
                <Text style={styles.ButtonText}>
                  {i18n.t('phrases.login').toUpperCase()}
                </Text>
                <Icons
                  name="ios-arrow-forward-outline"
                  size={20}
                  color={theme.WHITE_COLOR}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = ({i18n}) => {
  return {
    i18n: i18n.i18n,
  };
};

export default connect(mapStateToProps)(WelcomeScreen);
