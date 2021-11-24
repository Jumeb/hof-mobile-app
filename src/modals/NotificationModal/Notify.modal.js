import React from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';

import styles from './Notify.style';
import theme from '../../../resources/Colors/theme';

const Notify = (props) => {
  const {notify, message} = props;
  return (
    <Modal
      style={styles.mainContainer}
      isVisible={notify}
      hasBackdrop={false}
      animationInTiming={1000}
      animationOutTiming={2000}
      animationIn="fadeInDown"
      animationOut="fadeOutUp">
      <LinearGradient
        style={styles.notifyContainer}
        colors={[theme.PRIMARY_COLOR, theme.SECONDARY_COLOR]}>
        <Text style={styles.notifyText}>{message}</Text>
      </LinearGradient>
    </Modal>
  );
};

export default Notify;
