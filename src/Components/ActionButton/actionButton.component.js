import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import styles from './actionButton.style';
import theme from '../../../resources/Colors/theme';

const Action = (props) => {
  const {name, color, closeModal} = props;
  return (
    <TouchableOpacity style={styles.mainButton}>
      <Icons
        name={name}
        size={18}
        color={color ? color : theme.primary_color}
        style={styles.buttonIcon}
      />
    </TouchableOpacity>
  );
};

export default Action;
