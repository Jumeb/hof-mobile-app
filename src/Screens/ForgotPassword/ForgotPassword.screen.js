import React, {useState} from 'react';
import {
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  useWindowDimensions,
  StatusBar,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';

import styles from './ForgotPassword.style';
import theme from '../../../resources/Colors/theme';
import {InputComponent, Text} from '../../Components/index';
import {AuthMail} from '../../utils';

const ForgotPassword = (props) => {
  const {i18n} = props;
  let h = useWindowDimensions().height + 100;

  const [email, setEmail] = useState('');
  const [authMail, setAuthMail] = useState(false);
  const [password, setPassword] = useState('');
  const [_token, setToken] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [_tokenError, setTokenError] = useState(false);
  const [conPasswordError, setConPasswordError] = useState(false);
  let hasError = false;

  const authenticate = () => {
    if (!AuthMail(email)) {
      setEmailError(true);
    } else if (!emailError && AuthMail(email)) {
      setAuthMail(true);
    }
  };

  const reset = () => {
    if (_token.length !== 6) {
      setTokenError(true);
      hasError = true;
    }
    if (password.length !== conPassword.length || password.length < 6) {
      setPasswordError(true);
      setConPasswordError(true);
      hasError = true;
    }
    if (!hasError) {
      Actions.main();
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar animated={true} backgroundColor={theme.PRIMARY_COLOR} />
      <ScrollView style={styles.container}>
        <ImageBackground
          imageStyle={styles.welcomeImageStyle}
          style={[{height: h / 2.55}, styles.welcomeImageBackground]}
          source={require('../../../resources/images/weds-2.jpg')}>
          <View style={styles.messageContainer}>
            <Image
              source={require('../../../resources/images/favicon-1.png')}
              style={styles.logoImage}
            />
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeTitle}>FLAVØURS</Text>
              <Text style={styles.welcomeSlogan}>
                {i18n.t('phrases.justCantHaveEnough')}
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.inputsContainer}>
          <Text style={styles.welcomeText}>
            {i18n.t('phrases.forgotLogin')}
          </Text>
          {!authMail ? (
            <Text style={styles.instructions}>
              {i18n.t('phrases.pleaseEnterYourEmail')}
            </Text>
          ) : (
            <Text style={styles.instructions}>
              {i18n.t('phrases.pleaseEnterToken')}
            </Text>
          )}
          {!authMail ? (
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
          ) : (
            <>
              <InputComponent
                holder={i18n.t('words.token')}
                type="phone-pad"
                capitalize="none"
                secure={false}
                inputError={_tokenError}
                value={_token}
                toggleError={() => setTokenError(false)}
                setValue={(text) => setToken(text)}
                errorMessage={i18n.t('phrases.tokenNotValid')}
              />
              <InputComponent
                holder={i18n.t('words.password')}
                type="default"
                capitalize="none"
                secure={true}
                inputError={passwordError}
                toggleError={() => setPasswordError(false)}
                value={password}
                setValue={(text) => setPassword(text)}
                errorMessage={i18n.t('phrases.passwordTooShort')}
              />
              <InputComponent
                holder={i18n.t('phrases.confirmPassword')}
                type="default"
                capitalize="none"
                secure={true}
                inputError={conPasswordError}
                toggleError={() => setConPasswordError(false)}
                value={conPassword}
                setValue={(text) => setConPassword(text)}
                errorMessage={i18n.t('phrases.passwordMismatch')}
              />
            </>
          )}
          {!authMail ? (
            <>
              <TouchableOpacity
                style={styles.Button}
                onPress={() => authenticate()}>
                <Text style={styles.ButtonText}>
                  {i18n.t('words.next').toUpperCase()}
                </Text>
              </TouchableOpacity>
              <View style={styles.forgotContainer}>
                <Text style={styles.forgotPasswordText}>
                  {i18n.t('phrases.alreadyHaveAnAccount')}
                </Text>
                <TouchableOpacity onPress={() => Actions.Login()}>
                  <Text style={styles.loginText}>{i18n.t('words.login')}</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <LinearGradient
                style={styles.gradient}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                colors={[theme.SECONDARY_COLOR, theme.TERTIARY_COLOR]}>
                <TouchableOpacity
                  onPress={() => Actions.SignUp()}
                  style={styles.gradientButton}>
                  <Text style={styles.gradientButtonText}>
                    {i18n.t('phrases.changePassword').toUpperCase()}
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
              <View style={styles.forgotContainer}>
                <Text style={styles.forgotPasswordText}>
                  {i18n.t('phrases.alreadyHaveAnAccount')}
                </Text>
                <TouchableOpacity onPress={() => Actions.Login()}>
                  <Text style={styles.loginText}>{i18n.t('words.login')}</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
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

export default connect(mapStateToProps)(ForgotPassword);
