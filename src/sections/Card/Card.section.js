import React from 'react';
import {CreditCardInput} from 'react-native-credit-card-input';
import {TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

import styles from './Card.styles';
import theme from '../../../resources/Colors/theme';
import {Text} from '../../Components';

const Card = (props) => {
  const {isCard, setIsCard, setCard, i18n} = props;
  return (
    <Modal
      isVisible={isCard}
      style={styles.mainContainer}
      animationInTiming={500}
      animationOutTiming={400}
      backdropOpacity={0.55}
      backdropColor={theme.SECONDARY_COLOR}
      onBackdropPress={() => setIsCard(false)}
      onBackButtonPress={() => setIsCard(false)}
      swipeDirection={'down'}
      onSwipeComplete={() => setIsCard(false)}>
      <View style={styles.cardContainer}>
        <CreditCardInput
          onChange={(info) => setCard(info)}
          inputContainerStyle={styles.cardInput}
          inputStyle={styles.cardInput}
          labelStyle={styles.cardLable}
          allowScroll
        />
        <TouchableOpacity
          style={[styles.actionButton, styles.success]}
          onPress={() => setIsCard(false)}>
          <Text style={styles.actionButtonText}>{i18n.t('words.save')}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default Card;
