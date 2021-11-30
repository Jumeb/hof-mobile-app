import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import theme from '../../../resources/Colors/theme';

import styles from '../BackBar/Back.style';

const NavBar = (props) => {
  const {title, inner} = props;
  return (
    <View style={styles.backContainer}>
      <TouchableOpacity>
        <Icons
          name="ios-chevron-back-outline"
          size={25}
          color={theme.PRIMARY_COLOR}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
