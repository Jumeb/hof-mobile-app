import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../../resources/Colors/theme';

import styles from './gateCard.style';

const Bakers = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[theme.primary_color, theme.tertiary_color]}
      style={styles.mainContainer}>
      <TouchableOpacity activeOpacity={1}>
        <View style={styles.companyInfo}>
          <Image
            style={styles.companyImage}
            source={require('../../../resources/images/bds-1.jpg')}
          />
          <View style={styles.companyCredentials}>
            <Text style={styles.companyFounder}>Noella Cara</Text>
            <Text style={styles.companyName}>CEO: Cara Cakes</Text>
          </View>
          <View style={styles.rankContainer}>
            <Text style={styles.rankNumber}>1</Text>
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
              style={styles.companyLogo}
              source={require('../../../resources/images/favicon.png')}
            />
          </View>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Bakers;
