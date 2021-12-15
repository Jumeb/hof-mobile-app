import React from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';
import theme from '../../../resources/Colors/theme';

import {ModalButton} from '../../Components';
import styles from './confirm.style';

const Confirm = (props) => {
  const {confirm, closeModal} = props;
  return (
    <Modal
      isVisible={confirm}
      style={styles.mainContainer}
      animationIn="fadeInUp"
      animationOut="fadeOutDown"
      swipeDirection={['down']}
      onSwipeComplete={() => closeModal()}
      onBackButtonPress={() => closeModal()}
      onBackdropPress={() => closeModal()}
      animationInTiming={1000}
      animationOutTiming={800}
      backdropOpacity={0.5}>
      <View style={styles.confirmCard}>
        <Text style={styles.confirmMessage}>Do you want to delete ?</Text>
        <View style={styles.eventMessage}>
          <Text style={styles.eventMessageLabel}>Event for: </Text>
          <Text style={styles.eventMessageInfo}>James</Text>
        </View>
        <View style={styles.eventMessage}>
          <Text style={styles.eventMessageLabel}>Purpose: </Text>
          <Text style={styles.eventMessageInfo}>Happy Birthday</Text>
        </View>
        <View style={styles.confirmOptions}>
          <ModalButton
            name="ios-close-sharp"
            color={theme.SECONESSS_COLOR}
            closeModal={closeModal}
          />
          <ModalButton name="ios-checkmark-sharp" color={theme.DANGER_COLOR} />
        </View>
      </View>
    </Modal>
  );
};

export default Confirm;
