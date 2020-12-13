import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './BakerCard.style';

const Bakers = (props) => {
  const {baker, color, onPress, about} = props;
  return (
    <View style={[styles.mainCard, {borderColor: color.start}]}>
      <TouchableOpacity activeOpacity={1} onPress={() => onPress()}>
        <View style={styles.companyInfo}>
          <View
            style={[styles.companyImageContainer, {borderColor: color.start}]}>
            <Image
              style={styles.companyImage}
              source={require('../../../resources/images/vals-3.jpg')}
            />
          </View>
          <View style={styles.companyCredentials}>
            <Text style={[styles.companyFounder, {color: color.start}]}>
              {baker.company_name}
            </Text>
            <Text style={[styles.companyName, {color: color.start}]}>
              CEO: {baker.ceo_name}
            </Text>
          </View>
          <View style={styles.rankContainer}>
            <Text style={[styles.rankNumber, {color: color.end}]}>
              {baker.rank}
            </Text>
            <Text style={[styles.rankText, {color: color.end}]}>{about}</Text>
          </View>
        </View>
        <View style={styles.companyStats}>
          <View style={styles.companyOrders}>
            <Text style={[styles.companyOrdersNumber, {color: color.start}]}>
              234
            </Text>
            <Text style={[styles.companyOrdersText, {color: color.end}]}>
              Orders
            </Text>
          </View>
          <View style={styles.companyOrders}>
            <Text style={[styles.companyOrdersNumber, {color: color.start}]}>
              234
            </Text>
            <Text style={[styles.companyOrdersText, {color: color.end}]}>
              Likes
            </Text>
          </View>
          <View style={styles.companySign}>
            <Image
              style={[styles.companyLogo, {tintColor: color.end}]}
              source={require('../../../resources/images/favicon.png')}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Bakers;
