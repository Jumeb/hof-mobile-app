import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

import theme from '../../../resources/Colors/theme';
import {InputComponent, Text} from '../../Components';
import styles from './Message.styles';

const Message = (props) => {
  const {isMessage, setIsMessage, setMessage, message, i18n} = props;
  const [momoError, setMomoError] = useState(false);

  return (
    <Modal
      isVisible={isMessage}
      style={styles.mainContainer}
      animationInTiming={500}
      animationOutTiming={400}
      backdropOpacity={0.55}
      backdropColor={theme.SECONDARY_COLOR}
      onBackdropPress={() => setIsMessage(false)}
      onBackButtonPress={() => setIsMessage(false)}
      swipeDirection={'down'}
      onSwipeComplete={() => setIsMessage(false)}>
      <View style={styles.momoContainer}>
        <Text style={styles.title}>{i18n.t('phrases.enterYourMessage')}</Text>
        <InputComponent
          holder={i18n.t('phrases.phoneNumber')}
          type="phone-pad"
          capitalize="none"
          secure={false}
          inputError={momoError}
          toggleError={() => setMomoError(false)}
          value={message}
          setValue={(text) => setMessage(text)}
          errorMessage={i18n.t('phrases.invalidPhoneNumber')}
        />
        <TouchableOpacity
          style={[styles.actionButton, styles.success]}
          onPress={() => setIsMessage(false)}>
          <Text style={styles.actionButtonText}>{i18n.t('words.save')}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default Message;
