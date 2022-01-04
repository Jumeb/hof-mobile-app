import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import {Text} from '..';
import theme from '../../../resources/Colors/theme';
import styles from './Button.style';

const RateButton = (props) => {
  const {title, onPress, icon} = props;
  return (
    <TouchableOpacity style={styles.rateButton} onPress={() => onPress()}>
      <Icons name={icon} size={16} color={theme.WHITE_COLOR} />
      <Text style={styles.rateButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RateButton;
