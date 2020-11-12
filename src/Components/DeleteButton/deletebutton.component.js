import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import theme from '../../../resources/Colors/theme';
import styles from './deletebutton.style';

const Delete = (props) => {
  const {openModal} = props;
  return (
    <TouchableOpacity style={styles.mainButton} onPress={() => openModal()}>
      <Icons name="ios-close-sharp" size={15} color={theme.danger_color} />
    </TouchableOpacity>
  );
};

export default Delete;
