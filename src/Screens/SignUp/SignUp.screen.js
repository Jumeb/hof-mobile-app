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

import {InputComponent} from '../../Components/index';
import styles from './SignUp.style';
import theme from '../../../resources/Colors/theme';
import {AuthMail} from '../../utils';

const SignUp = () => {
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

  const authenticate = () => {
    if (!AuthMail(email) < 5) {
      setEmailError(true);
    }
    if (userName.length < 5) {
      setUserNameError(true);
    }
    if (tel.length !== 9) {
      setTelError(true);
    }
    if (password.length !== conPassword.length || password.length < 6) {
      setPasswordError(true);
      setConPasswordError(true);
    } else if (
      password.length > 4 &&
      AuthMail(email) &&
      tel.length !== 9 &&
      userName.length > 4 &&
      !telError &&
      !userNameError &&
      !conPasswordError &&
      !passwordError &&
      !emailError
    ) {
      Actions.Login();
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        <ImageBackground
          imageStyle={styles.welcomeImageStyle}
          style={[{height: h}, styles.ImageBackground]}
          source={require('../../../resources/images/pans-14.jpg')}>
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
                holder="User Name"
                type="default"
                capitalize="words"
                secure={false}
                inputError={userNameError}
                value={userName}
                toggleError={() => setUserNameError(false)}
                setValue={(text) => setUserName(text)}
                errorMessage="User name short"
              />
              <InputComponent
                holder="Phone Number"
                type="phone-pad"
                capitalize="none"
                secure={false}
                inputError={telError}
                value={tel}
                toggleError={() => setTelError(false)}
                setValue={(text) => setTel(text)}
                errorMessage="Invalid phone number"
              />
              <InputComponent
                holder="User Email"
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
                toggleError={() => setPasswordError(false)}
                value={password}
                setValue={(text) => setPassword(text)}
                errorMessage="Password too short"
              />
              <InputComponent
                holder="Confirm Password"
                type="default"
                capitalize="none"
                secure={true}
                inputError={conPasswordError}
                toggleError={() => setConPasswordError(false)}
                value={conPassword}
                setValue={(text) => setConPassword(text)}
                errorMessage="Password mismatch"
              />
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
            <Text style={styles.ButtonText}>GET STARTED</Text>
            <Icons
              name="ios-arrow-forward-outline"
              size={25}
              color={theme.white_color}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => Actions.Welcome()}>
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

export default SignUp;
