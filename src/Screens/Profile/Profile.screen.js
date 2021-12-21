import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import Icons from 'react-native-vector-icons/Ionicons';

import styles from './Profile.style';
import {GradientButton, InputComponent, NavBar, Text} from '../../Components';
import theme from '../../../resources/Colors/theme';
import {ChangePassword, ImageCapture} from '../../sections';

const Profile = (props) => {
  const {i18n, user} = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telNumber, setTelNumber] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [telError, setTelError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [image, setImage] = useState(false);
  const [notify, setNotify] = useState(false);

  useEffect(() => {
    setName(user?.name);
    setEmail(user?.email);
    setTelNumber(user?.telNumber.toString());
  }, [user]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <NavBar pop={true} screen="Profile" right={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.editProfileContainer}>
          <Text style={styles.editProfile}>
            {i18n.t('phrases.editProfile')}
          </Text>
        </View>
        <View style={styles.profileContainer}>
          <TouchableOpacity
            style={styles.profileImageContainer}
            onPress={() => setImage(true)}
            activeOpacity={1}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.profileImage}
                // imageStyle={styles.userImage}
                source={require('../../../resources/images/vals-3.jpg')}
              />
            </View>
            <TouchableOpacity
              style={styles.profileEditImage}
              onPress={() => setImage(true)}>
              <Icons
                name="ios-camera-outline"
                size={16}
                color={theme.PRIMARY_COLOR}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <Text style={styles.editInstructions}>
            {i18n.t('phrases.addOptionalProfile')}
          </Text>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfo}>{i18n.t('phrases.personalInfo')}</Text>
          <View style={styles.inputContainer}>
            <InputComponent
              holder={i18n.t('words.name')}
              type="default"
              capitalize="none"
              secure={false}
              inputError={nameError}
              toggleError={() => setNameError(false)}
              value={name}
              setValue={(text) => setName(text)}
              errorMessage={i18n.t('phrases.nameTooShort')}
            />
            <InputComponent
              holder={i18n.t('words.email')}
              type="default"
              capitalize="none"
              secure={false}
              inputError={emailError}
              toggleError={() => setEmailError(false)}
              value={email}
              setValue={(text) => setEmail(text)}
              errorMessage={i18n.t('phrases.invalidMail')}
            />
            <InputComponent
              holder={i18n.t('phrases.phoneNumber')}
              type="phone-pad"
              capitalize="none"
              secure={false}
              inputError={telError}
              toggleError={() => setTelError(false)}
              value={telNumber}
              setValue={(text) => setTelNumber(text)}
              errorMessage={i18n.t('phrases.invalidPhoneNumber')}
            />
          </View>
          <TouchableOpacity
            style={styles.changePasswordContainer}
            onPress={() => setChangePassword(true)}>
            <Text style={styles.changePasswordText}>
              {i18n.t('phrases.changePassword')}
            </Text>
            <Icons
              name="ios-chevron-forward-outline"
              size={16}
              color={theme.DARK_GREY}
            />
          </TouchableOpacity>
          <GradientButton
            title={i18n.t('words.save')}
            onPress={() => console.log(123)}
          />
        </View>
      </ScrollView>
      <ChangePassword
        changePassword={changePassword}
        setChangePassword={setChangePassword}
        setNotify={setNotify}
      />
      <ImageCapture image={image} setImage={setImage} setNotify={setNotify} />
    </SafeAreaView>
  );
};

const mapStateToProps = ({i18n, auth}) => {
  return {
    i18n: i18n.i18n,
    user: auth.user,
  };
};

export default connect(mapStateToProps)(Profile);
