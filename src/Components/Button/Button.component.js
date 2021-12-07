import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import {Text} from '..';
import theme from '../../../resources/Colors/theme';
import styles from './Button.style';

const GradientButton = (props) => {
  const {title, icon, onPress} = props;
  return (
    <LinearGradient
      style={styles.gradient}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      colors={[theme.SECONDARY_COLOR, theme.TERTIARY_COLOR]}>
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.ButtonText}>{title}</Text>
        <Icons name={icon} size={16} color={theme.WHITE_COLOR} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default GradientButton;
