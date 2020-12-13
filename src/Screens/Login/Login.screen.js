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
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icons from 'react-native-vector-icons/Ionicons';

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
      <ScrollView style={styles.container}>
        <ImageBackground
          imageStyle={styles.welcomeImageStyle}
          style={[{height: h}, styles.welcomeImageBackground]}
          source={require('../../../resources/images/bds-7.jpg')}>
          <View style={styles.messageContainer}>
            <Image
              source={require('../../../resources/images/caracakes8.png')}
              style={styles.logoImage}
            />
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeTitle}>ENTER</Text>
              <Text style={styles.welcomeSlogan}>the gates of flavour</Text>
            </View>
            <View style={styles.inputsContainer}>
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
              <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>FORGOT PASSWORD ?</Text>
              </TouchableOpacity>
              <View style={styles.indicatorIcon}>
                <Icons
                  name="ios-chevron-down-outline"
                  size={25}
                  color={theme.white_color}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => authenticate()}>
            <Text style={styles.ButtonText}>LOG IN</Text>
            <Icons
              name="ios-arrow-forward-outline"
              size={25}
              color={theme.white_color}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => Actions.welcome()}>
            <Text style={styles.ButtonText}>START</Text>
            <Icons
              name="ios-return-up-back-outline"
              size={25}
              color={theme.white_color}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
