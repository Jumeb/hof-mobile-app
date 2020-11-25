import React from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import styles from './Setting.style';
import {Header, Spacer} from '../../Components';

const Setting = () => {
  return (
    <ScrollView style={styles.settings}>
      <Header />
      <TouchableOpacity style={styles.subMenus}>
        <Text style={styles.subMenusText}>Languages</Text>
        <Icons name="ios-language-outline" size={20} />
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.subMenus}>
        <Text style={styles.subMenusText}>History</Text>
        <Icons name="ios-analytics-outline" size={20} />
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.subMenus}>
        <Text style={styles.subMenusText}>Contact us</Text>
        <Icons name="ios-phone-portrait-outline" size={20} />
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.subMenus}>
        <Text style={styles.subMenusText}>Terms and Privacy Policy</Text>
        <Icons name="ios-shield-checkmark-outline" size={20} />
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.subMenus}>
        <Text style={styles.subMenusText}>FAQ</Text>
        <Icons name="ios-help-outline" size={20} />
      </TouchableOpacity>
      <Spacer />
    </ScrollView>
  );
};

export default Setting;
