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
import LinearGradient from 'react-native-linear-gradient';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import styles from './Login.style';
import theme from '../../../resources/Colors/theme';
import {InputComponent, Notification} from '../../Components';
import {AuthMail, BASE_URL, Storage} from '../../utils';
import {setUser, setToken} from '../../redux/actions/AuthActions';

const Login = (props) => {
  const {i18n} = props;
  let h = useWindowDimensions().height + 100;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notify, setNotify] = useState(false);
  const [info, setInfo] = useState({});
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

  const authenticate = () => {
    let hasError = false;
    setLoading(true);

    if (!AuthMail(email)) {
      setEmailError(true);
      hasError = true;
    }
    if (password.length < 5) {
      setPasswordError(true);
      hasError = true;
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
    };

    let statusCode, responseJson;
    fetch(`${BASE_URL}/user/login`, {
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
        // console.log(statusCode);

        if (statusCode === 200) {
          props.setUser(responseJson.user);
          props.setToken(responseJson.token);
          Storage.storeInfo('USER', responseJson?.user);
          Storage.storeInfo('CART', responseJson?.user?.cart);
          Storage.storeInfo('FAVOURITES', responseJson?.user?.favourites);
          Storage.storeInfo('TOKEN', responseJson?.token);
          return Actions.main();
        }

        if (statusCode === 401) {
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.inValidEmailOrPassword'),
          });
          return false;
        }

        if (statusCode === 402) {
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.accountSuspendedContact'),
          });
          return false;
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
          style={[{height: h / 2.7}, styles.welcomeImageBackground]}
          source={require('../../../resources/images/weds-2.jpg')}>
          <View style={styles.messageContainer}>
            <Image source={icon} style={styles.logoImage} />
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
            {loading ? (
              <ActivityIndicator size={'small'} color={theme.PRIMARY_COLOR} />
            ) : (
              <Text style={styles.ButtonText}>
                {i18n.t('phrases.login').toUpperCase()}
              </Text>
            )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
