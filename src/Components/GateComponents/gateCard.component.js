import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';

import theme from '../../../resources/Colors/theme';
import styles from './gateCard.style';

const Bakers = (props) => {
  const {baker, color} = props;
  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      colors={[color.start, color.end]}
      style={styles.mainContainer}>
      <TouchableOpacity activeOpacity={1} onPress={() => Actions.Shop()}>
        <View style={styles.companyInfo}>
          <View style={styles.companyImageContainer}>
            <Image
              style={styles.companyImage}
              source={require('../../../resources/images/bds-1.jpg')}
            />
          </View>
          <View style={styles.companyCredentials}>
            <Text style={styles.companyFounder}>{baker.company_name}</Text>
            <Text style={styles.companyName}>CEO: {baker.ceo_name}</Text>
          </View>
          <View style={styles.rankContainer}>
            <Text style={styles.rankNumber}>{baker.rank}</Text>
            <Text style={styles.rankText}>Ranking</Text>
          </View>
        </View>
        <View style={styles.companyStats}>
          <View style={styles.companyOrders}>
            <Text style={styles.companyOrdersNumber}>234</Text>
            <Text style={styles.companyOrdersText}>Orders</Text>
          </View>
          <View style={styles.companyOrders}>
            <Text style={styles.companyOrdersNumber}>234</Text>
            <Text style={styles.companyOrdersText}>Likes</Text>
          </View>
          <View style={styles.companySign}>
            <Image
              style={[styles.companyLogo, {tintColor: color.end}]}
              source={require('../../../resources/images/favicon.png')}
            />
          </View>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Bakers;
