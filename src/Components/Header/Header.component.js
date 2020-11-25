import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import styles from './Header.style';

const Header = () => {
  return (
    <>
      <View style={styles.settingsContainer}>
        <Text style={styles.settingsText}>Settings</Text>
      </View>
      <View style={styles.userProfile}>
        <View style={styles.userImageBorder}>
          <Image
            style={styles.userImage}
            source={require('../../../resources/images/vals-3.jpg')}
          />
        </View>
        <TouchableOpacity style={styles.editProfile} activeOpacity={0.9}>
          <Icons
            name="pencil-outline"
            size={18}
            style={styles.editProfileIcon}
          />
        </TouchableOpacity>
        <Text style={styles.userName}>Jume Njah</Text>
        <Text style={styles.userNumber}>+237 681 726 633</Text>
      </View>
    </>
  );
};

export default Header;
