import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

import theme from '../../../resources/Colors/theme';
import {InputComponent, Text} from '../../Components';
import styles from './Momo.styles';

const Momo = (props) => {
  const {isMomo, setIsMomo, setMomo, momo, i18n} = props;
  const [momoError, setMomoError] = useState(false);

  return (
    <Modal
      isVisible={isMomo}
      style={styles.mainContainer}
      animationInTiming={500}
      animationOutTiming={400}
      backdropOpacity={0.55}
      backdropColor={theme.SECONDARY_COLOR}
      onBackdropPress={() => setIsMomo(false)}
      onBackButtonPress={() => setIsMomo(false)}
      swipeDirection={'down'}
      onSwipeComplete={() => setIsMomo(false)}>
      <View style={styles.momoContainer}>
        <Text style={styles.title}>{i18n.t('phrases.enterMomoNumber')}</Text>
        <InputComponent
          holder={i18n.t('phrases.phoneNumber')}
          type="phone-pad"
          capitalize="none"
          secure={false}
          inputError={momoError}
          toggleError={() => setMomoError(false)}
          value={momo}
          setValue={(text) => setMomo(text)}
          errorMessage={i18n.t('phrases.invalidPhoneNumber')}
        />
        <TouchableOpacity
          style={[styles.actionButton, styles.success]}
          onPress={() => setIsMomo(false)}>
          <Text style={styles.actionButtonText}>{i18n.t('words.save')}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default Momo;
