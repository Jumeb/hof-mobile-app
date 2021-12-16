import React from 'react';
import {KeyboardAvoidingView, Text, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import theme from '../../../resources/Colors/theme';

import styles from './TabBar.style';

const TabBar = (props) => {
  const {state} = props.navigation;
  const {i18n} = props;
  const activeTabIndex = state.index;

  return (
    <KeyboardAvoidingView style={styles.tabBar}>
      {/* <TouchableOpacity style={styles.tabTabSelected}>
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
      </TouchableOpacity> */}
      {state.routes.map((element) => (
        <TabIcon
          element={element}
          title={element.key}
          activeTabIndex={activeTabIndex}
          key={element.key}
          i18n={i18n}
        />
      ))}
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = ({i18n}) => {
  return {
    i18n: i18n.i18n,
  };
};

export default connect(mapStateToProps)(TabBar);

const TabIcon = (props) => {
  const {title, activeTabIndex, element, i18n} = props;
  let icon = '';
  let index = -1;
  if (title === 'orders') {
    icon = 'ios-file-tray-full-outline';
    index = 1;
  }
  if (title === 'wallet') {
    icon = 'ios-wallet-outline';
    index = 2;
  }
  if (title === 'settings') {
    icon = 'ios-cog-outline';
    index = 3;
  }
  // if (title === 'orders') {
  //   icon = 'ios-receipt-outline';
  // }
  if (title === 'home') {
    icon = 'ios-home-outline';
    index = 0;
  }

  return (
    <TouchableOpacity
      style={activeTabIndex === index ? styles.tabTabSelected : styles.tabTab}
      onPress={() => Actions[title]()}
      key={element.key}>
      <Icons
        name={icon}
        size={18}
        color={
          activeTabIndex === index ? theme.WHITE_COLOR : theme.SECONDARY_COLOR
        }
      />
      <Text
        numberOfLines={1}
        style={
          activeTabIndex === index
            ? styles.tabTabTextSelected
            : styles.tabTabText
        }>
        {title === 'home'
          ? i18n.t('words.home').toUpperCase()
          : title === 'settings'
          ? i18n.t('words.settings').toUpperCase()
          : title === 'wallet'
          ? i18n.t('words.wallet').toUpperCase()
          : i18n.t('words.orders').toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};
