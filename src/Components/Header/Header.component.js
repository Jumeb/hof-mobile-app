import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './Header.style';

const Header = () => {
  return (
    <>
      <TouchableOpacity style={styles.userProfile}>
        <Image
          style={styles.userImage}
          source={require('../../../resources/images/bds-12.jpg')}
        />
        <Text style={styles.userName}>Jume Njah</Text>
        <Text style={styles.userNumber}>+237 681 726 633</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
    </>
  );
};

export default Header;
