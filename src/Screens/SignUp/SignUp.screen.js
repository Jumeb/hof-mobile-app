import React, {useState, useEffect} from 'react';
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

import {InputComponent} from '../../Components/index';
import styles from './SignUp.style';
import theme from '../../../resources/Colors/theme';
import {AuthMail} from '../../utils';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';

const SignUp = (props) => {
  const {i18n} = props;
  let h = useWindowDimensions().height + 240;
  const [userName, setUserName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [telError, setTelError] = useState(false);
  const [conPasswordError, setConPasswordError] = useState(false);
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

  let hasError = false;

  const authenticate = () => {
    if (!AuthMail(email)) {
      setEmailError(true);
      hasError = true;
    }
    if (userName.length < 5) {
      setUserNameError(true);
      hasError = true;
    }
    if (tel.length !== 9) {
      setTelError(true);
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
          style={[{height: h / 3.4}, styles.ImageBackground]}
          source={require('../../../resources/images/cups-5.jpg')}>
          <View style={styles.messageContainer}>
            <Image source={icon} style={styles.logoImage} />
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeTitle}>ARØMA</Text>
              <Text style={styles.welcomeSlogan}>
                {i18n.t('phrases.exchangeValues')}
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.inputsContainer}>
          <Text style={styles.welcomeText}>
            {i18n.t('phrases.signUp').toUpperCase()}
          </Text>
          <InputComponent
            holder={i18n.t('words.name')}
            type="default"
            capitalize="words"
            secure={false}
            inputError={userNameError}
            value={userName}
            toggleError={() => setUserNameError(false)}
            setValue={(text) => setUserName(text)}
            errorMessage={i18n.t('phrases.userNameShort')}
          />
          <InputComponent
            holder={i18n.t('phrases.phoneNumber')}
            type="phone-pad"
            capitalize="none"
            secure={false}
            inputError={telError}
            value={tel}
            toggleError={() => setTelError(false)}
            setValue={(text) => setTel(text)}
            errorMessage={i18n.t('phrases.invalidPhoneNumber')}
          />
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
          <LinearGradient
            style={styles.gradient}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            colors={[theme.SECONDARY_COLOR, theme.TERTIARY_COLOR]}>
            <TouchableOpacity
              onPress={() => authenticate()}
              style={styles.gradientButton}>
              <Text style={styles.gradientButtonText}>
                {i18n.t('phrases.signUp').toUpperCase()}
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

export default connect(mapStateToProps)(SignUp);
