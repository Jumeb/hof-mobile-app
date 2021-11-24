import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import theme from '../../../resources/Colors/theme';

import styles from './TabBar.style';

const TabBar = () => {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity style={styles.tabTabSelected}>
        <Icons name="ios-home" size={20} color={theme.WHITE_COLOR} />
        <Text style={styles.tabTabTextSelected}>HOME</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabTab}>
        <Icons name="md-receipt-outline" size={20} color={theme.LIGHT_GREY} />
        <Text style={styles.tabTabText}>ORDERS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabTab}>
        <Icons
          name="ios-chatbubbles-sharp"
          size={20}
          color={theme.LIGHT_GREY}
        />
        <Text style={styles.tabTabText}>REVIEWS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabTab}>
        <Icons
          name="person-circle-outline"
          size={20}
          color={theme.LIGHT_GREY}
        />
        <Text style={styles.tabTabText}>PROFILE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;
