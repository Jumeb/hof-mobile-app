import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import styles from './ModalButton.style';
import theme from '../../../resources/Colors/theme';

const ModalButton = (props) => {
  const {name, color, closeModal} = props;
  return (
    <TouchableOpacity
      onPress={() => closeModal()}
      style={[styles.mainButton, {borderColor: color ? color : ''}]}>
      <Icons
        name={name}
        size={18}
        color={color ? color : theme.primary_color}
        style={styles.buttonIcon}
      />
    </TouchableOpacity>
  );
};

export default ModalButton;
