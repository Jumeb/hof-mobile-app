import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import Icons from 'react-native-vector-icons/Ionicons';

import styles from './ChangePassword.styles';
import theme from '../../../resources/Colors/theme';
import {InputComponent, Text} from '../../Components';

const ChangePassword = (props) => {
  const {changePassword, setChangePassword, i18n, setNotify, location} = props;

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [oldPasswordError, setOldPasswordError] = useState(false);
  const [newPasswordError, setNewPasswordError] = useState(false);
  const [conPasswordError, setConPasswordError] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setChangePassword(false);
  //   }, 60000);
  // }, [changePassword, setChangePassword]);

  const removeString =
    location === 'cart'
      ? i18n.t('phrases.fromCart')
      : location === 'favourites'
      ? i18n.t('phrases.fromFavourites')
      : i18n.t('phrases.fromThisGroup');

  const Confirm = () => {
    setChangePassword(false);
    setNotify(true);
  };

  return (
    <Modal
      isVisible={changePassword}
      style={styles.mainContainer}
      animationInTiming={500}
      animationOutTiming={400}
      backdropOpacity={0.55}
      backdropColor={theme.PRIMARY_COLOR}
      onBackdropPress={() => setChangePassword(false)}
      onBackButtonPress={() => setChangePassword(false)}
      swipeDirection={'down'}
      onSwipeComplete={() => setChangePassword(false)}>
      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={styles.downIndicator}
          onPress={() => setChangePassword(false)}>
          <Icons
            name="ios-chevron-down-outline"
            size={16}
            color={theme.TERTIARY_COLOR}
          />
        </TouchableOpacity>
        <Text style={styles.actionInfo}>
          {i18n.t('phrases.changePassword')}
        </Text>
        <View style={styles.inputContainer}>
          <InputComponent
            holder={i18n.t('phrases.oldPassword')}
            type="default"
            capitalize="none"
            secure={true}
            inputError={oldPasswordError}
            toggleError={() => setOldPasswordError(false)}
            value={oldPassword}
            setValue={(text) => setOldPassword(text)}
            errorMessage={i18n.t('phrases.nameTooShort')}
          />
          <InputComponent
            holder={i18n.t('phrases.newPassword')}
            type="default"
            capitalize="none"
            secure={true}
            inputError={newPasswordError}
            toggleError={() => setNewPasswordError(false)}
            value={newPassword}
            setValue={(text) => setNewPassword(text)}
            errorMessage={i18n.t('phrases.nameTooShort')}
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
            errorMessage={i18n.t('phrases.nameTooShort')}
          />
        </View>
        <TouchableOpacity
          style={[styles.actionButton, styles.success]}
          onPress={() => setChangePassword(false)}>
          <Text style={styles.actionButtonText}>{i18n.t('words.save')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.success]}
          onPress={() => Confirm()}>
          <Text style={styles.actionButtonText}>{i18n.t('words.cancel')}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const mapStateToProps = ({i18n}) => {
  return {
    i18n: i18n.i18n,
  };
};

export default connect(mapStateToProps)(ChangePassword);
