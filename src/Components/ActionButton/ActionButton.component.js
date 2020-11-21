import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import styles from './ActionButton.style';
import theme from '../../../resources/Colors/theme';
import {Actions} from 'react-native-router-flux';

const Action = (props) => {
  const {name, color, shop} = props;
  const execute = () => {
    if (shop) {
      return Actions.Home();
    }
  };

  return (
    <TouchableOpacity style={styles.mainButton} onPress={() => execute()}>
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
