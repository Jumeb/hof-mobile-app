import React from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';

import styles from './Notify.style';

const Notify = (props) => {
  const {notify, message} = props;
  return (
    <Modal
      style={styles.mainContainer}
      isVisible={notify}
      hasBackdrop={false}
      animationInTiming={1000}
      animationOutTiming={2500}
      animationIn="slideInDown"
      animationOut="slideOutUp">
      <View style={styles.notifyContainer}>
        <Text style={styles.notifyText}>{message}</Text>
      </View>
    </Modal>
  );
};

export default Notify;
