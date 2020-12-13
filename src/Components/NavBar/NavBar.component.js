import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import theme from '../../../resources/Colors/theme';

import styles from './NavBar.style';

const Header = (props) => {
  const {title, inner} = props;
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
      <TouchableOpacity style={styles.eventsIndicator}>
        <Icons
          name="ios-bookmark-outline"
          size={25}
          color={theme.primary_color}
        />
        <View style={styles.eventsCountContainer}>
          <Text style={styles.eventsCount}>1</Text>
        </View>
      </TouchableOpacity>
      {title.toString() === 'Reviews' && (
        <TouchableOpacity style={styles.eventsIndicator}>
          <Icons
            name="ios-bookmark-outline"
            size={25}
            color={theme.primary_color}
          />
          <View style={styles.eventsCountContainer}>
            <Text style={styles.eventsCount}>1</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
