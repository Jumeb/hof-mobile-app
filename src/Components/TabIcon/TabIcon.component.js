import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

import theme from '../../../resources/Colors/theme';
import styles from './TabIcon.styles';

const TabIcon = ({title, activeTabIndex, element}) => {
  let icon = '';
  let index = -1;
  if (title === 'events') {
    icon = 'ios-book-outline';
    index = 1;
  }
  if (title === 'review') {
    icon = 'ios-chatbubbles-sharp';
    index = 2;
  }
  if (title === 'settings') {
    icon = 'ios-cog-outline';
    index = 3;
  }
  if (title === 'orders') {
    icon = 'ios-receipt-outline';
  }
  if (title === 'bakers') {
    icon = 'ios-home';
    index = 0;
  }

  return (
    <TouchableOpacity
      style={styles.tabTab}
      onPress={() => Actions[title]()}
      key={element.key}>
      <Icons
        name={icon}
        size={20}
        color={
          activeTabIndex === index ? theme.PRIMARY_COLOR : theme.LIGHT_GREY
        }
      />
      <Text
        style={
          activeTabIndex === index
            ? styles.tabTabTextSelected
            : styles.tabTabText
        }>
        {title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

export default TabIcon;
