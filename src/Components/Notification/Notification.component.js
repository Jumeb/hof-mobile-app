import React, {useEffect} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';

import styles from './Notification.styles';
import {Text} from '..';
import theme from '../../../resources/Colors/theme';

const Notification = (props) => {
  const {notify, setNotify, type, msg} = props;
  useEffect(() => {
    setTimeout(() => {
      setNotify(false);
    }, 5000);
  }, [notify, setNotify]);
  return (
    <Modal
      isVisible={notify}
      style={styles.mainContainer}
      animationInTiming={500}
      animationOutTiming={600}
      backdropOpacity={0}
      backdropColor={theme.TRANSPARENT}
      animationIn="fadeInDown"
      animationOut="fadeOutUp">
      <View
        style={[
          styles.notifyContainer,
          type === 'success' ? styles.success : styles.danger,
        ]}>
        <Text style={styles.notifyText}>{msg}</Text>
      </View>
    </Modal>
  );
};

export default Notification;
