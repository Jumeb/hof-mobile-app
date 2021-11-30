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

import styles from './Login.style';
import theme from '../../../resources/Colors/theme';
import {InputComponent} from '../../Components/index';
import {AuthMail} from '../../utils/';

const Login = () => {
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
              source={require('../../../resources/images/caracakes8.png')}
              style={styles.logoImage}
            />
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeTitle}>FLAVØURS</Text>
              <Text style={styles.welcomeSlogan}>
                in the name of great taste
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.inputsContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <InputComponent
            holder="Email"
            type="email-address"
            capitalize="none"
            secure={false}
            inputError={emailError}
            value={email}
            toggleError={() => setEmailError(false)}
            setValue={(text) => setEmail(text)}
            errorMessage="Invalid mail format"
          />
          <InputComponent
            holder="Password"
            type="default"
            capitalize="none"
            secure={true}
            inputError={passwordError}
            value={password}
            toggleError={() => setPasswordError(false)}
            setValue={(text) => setPassword(text)}
            errorMessage="Password required"
          />
          <TouchableOpacity
            style={styles.Button}
            onPress={() => authenticate()}>
            <Text style={styles.ButtonText}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>FORGOT PASSWORD ?</Text>
          </TouchableOpacity>
          <LinearGradient
            style={styles.gradientButton}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            colors={[theme.SECONDARY_COLOR, theme.TERTIARY_COLOR]}>
            <TouchableOpacity onPress={() => Actions.SignUp()}>
              <Text style={styles.gradientButtonText}>SIGN UP</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
