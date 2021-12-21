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
  ActivityIndicator,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import {InputComponent, Notification} from '../../Components';
import styles from './SignUp.style';
import theme from '../../../resources/Colors/theme';
import {AuthMail, AuthTel, BASE_URL, Storage} from '../../utils';
import {setUser, setToken} from '../../redux/actions/AuthActions';

const SignUp = (props) => {
  const {i18n} = props;
  let h = useWindowDimensions().height + 240;
  const [name, setName] = useState('');
  const [telNumber, setTelNumber] = useState('');
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
  const [notify, setNotify] = useState(false);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({});

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

  const authenticate = () => {
    let hasError = false;
    setLoading(true);

    if (!AuthMail(email)) {
      setEmailError(true);
      hasError = true;
    }
    if (name.length < 5) {
      setUserNameError(true);
      hasError = true;
    }
    if (telNumber.length !== 9 && !AuthTel(telNumber)) {
      setTelError(true);
      hasError = true;
    }
    if (
      password.length !== conPassword.length ||
      password.length < 6 ||
      password !== conPassword
    ) {
      setPasswordError(true);
      setConPasswordError(true);
      hasError = true;
    }

    if (password !== conPassword) {
      hasError = true;
      setPasswordError(true);
      setConPasswordError(true);
    }

    if (hasError) {
      setLoading(false);
      setNotify(true);
      setInfo({
        type: 'success',
        msg: i18n.t('phrases.checkCredentials'),
      });
      return false;
    }

    const body = {
      email,
      password,
      telNumber,
      name,
    };

    let statusCode, responseJson;
    fetch(`${BASE_URL}/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        statusCode = res.status;
        responseJson = res.json();
        return Promise.all([statusCode, responseJson]);
      })
      .then((res) => {
        setLoading(false);
        statusCode = res[0];
        responseJson = res[1];
        console.log(statusCode);

        if (statusCode === 201) {
          props.setUser(responseJson.user);
          props.setToken(responseJson.token);
          Storage.storeInfo('USER', responseJson.user);
          Storage.storeInfo('TOKEN', responseJson.token);
          return Actions.main();
        }

        if (statusCode === 422) {
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.validationFailedTryAgain'),
          });
          return false;
        }

        if (statusCode === 500) {
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.unexpectedError'),
          });
          return false;
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          setLoading(false);
          setNotify(true);
          setInfo({
            type: 'error',
            title: 'Unexpected Error',
            msg: i18n.t('phrases.pleaseCheckInternet'),
          });
        }
      })
      .finally((fin) => {
        setLoading(false);
        console.log('finished');
      });
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
            value={name}
            toggleError={() => setUserNameError(false)}
            setValue={(text) => setName(text)}
            errorMessage={i18n.t('phrases.userNameShort')}
          />
          <InputComponent
            holder={i18n.t('phrases.phoneNumber')}
            type="phone-pad"
            capitalize="none"
            secure={false}
            inputError={telError}
            value={telNumber}
            toggleError={() => setTelError(false)}
            setValue={(text) => setTelNumber(text)}
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
              {loading ? (
                <ActivityIndicator size={'small'} color={theme.WHITE_COLOR} />
              ) : (
                <Text style={styles.gradientButtonText}>
                  {i18n.t('phrases.signUp').toUpperCase()}
                </Text>
              )}
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
      <Notification notify={notify} setNotify={setNotify} info={info} />
    </SafeAreaView>
  );
};

const mapStateToProps = ({i18n}) => {
  return {
    i18n: i18n.i18n,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setUser, setToken}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
