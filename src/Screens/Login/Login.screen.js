import React, {useState} from 'react';
import {
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  StatusBar,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';

import styles from './Login.style';
import theme from '../../../resources/Colors/theme';
import {InputComponent} from '../../Components/index';
import {AuthMail} from '../../utils/';

const Login = (props) => {
  const {i18n} = props;
  let h = useWindowDimensions().height + 100;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const authenticate = () => {
    if (!AuthMail(email)) {
      setEmailError(true);
    }
    if (password.length < 5) {
      setPasswordError(true);
    } else if (
      password.length > 4 &&
      !passwordError &&
      !emailError &&
      AuthMail(email)
    ) {
      Actions.main();
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar animated={true} backgroundColor={theme.PRIMARY_COLOR} />
      <ScrollView style={styles.container}>
        <ImageBackground
          imageStyle={styles.welcomeImageStyle}
          style={[{height: h / 2.7}, styles.welcomeImageBackground]}
          source={require('../../../resources/images/weds-2.jpg')}>
          <View style={styles.messageContainer}>
            <Image
              source={require('../../../resources/images/favicon-1.png')}
              style={styles.logoImage}
            />
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeTitle}>FLAVØURS</Text>
              <Text style={styles.welcomeSlogan}>
                {i18n.t('phrases.inTheNameOf')}
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.inputsContainer}>
          <Text style={styles.welcomeText}>{i18n.t('words.welcome')}</Text>
          <InputComponent
            holder={i18n.t('words.email')}
            type="email-address"
            capitalize="none"
            secure={false}
            inputError={emailError}
            value={email}
            toggleError={() => setEmailError(false)}
            setValue={(text) => setEmail(text)}
            errorMessage={i18n.t('phrases.invalidMail')}
          />
          <InputComponent
            holder={i18n.t('words.password')}
            type="default"
            capitalize="none"
            secure={true}
            inputError={passwordError}
            value={password}
            toggleError={() => setPasswordError(false)}
            setValue={(text) => setPassword(text)}
            errorMessage={i18n.t('phrases.passwordRequired')}
          />
          <TouchableOpacity
            style={styles.Button}
            onPress={() => authenticate()}>
            <Text style={styles.ButtonText}>
              {i18n.t('phrases.login').toUpperCase()}
            </Text>
          </TouchableOpacity>
          <View style={styles.forgotContainer}>
            <Text style={styles.forgotPasswordText}>
              {i18n.t('phrases.forgotPassword')}
            </Text>
            <TouchableOpacity onPress={() => Actions.forgotPassword()}>
              <Text style={styles.loginText}>{i18n.t('words.yes')}</Text>
            </TouchableOpacity>
          </View>
          <LinearGradient
            style={styles.gradient}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            colors={[theme.SECONDARY_COLOR, theme.TERTIARY_COLOR]}>
            <TouchableOpacity
              onPress={() => Actions.SignUp()}
              style={styles.gradientButton}>
              <Text style={styles.gradientButtonText}>
                {i18n.t('phrases.signUp').toUpperCase()}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = ({i18n}) => {
  return {
    i18n: i18n.i18n,
  };
};

export default connect(mapStateToProps)(Login);
