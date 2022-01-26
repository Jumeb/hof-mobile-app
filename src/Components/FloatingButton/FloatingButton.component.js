import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icons from 'react-native-vector-icons/Ionicons';

import theme from '../../../resources/Colors/theme';
import styles from './FloatingButton.styles';

const FloatingButton = (props) => {
  const {show} = props;
  return (
    <>
      {show && (
        <TouchableOpacity
          style={styles.mainContainer}
          activeOpacity={0.7}
          onPress={() => Actions.home()}>
          <Icons
            name={'ios-people-outline'}
            color={theme.WHITE_COLOR}
            size={20}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

export default FloatingButton;
