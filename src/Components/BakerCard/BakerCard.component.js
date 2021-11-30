import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import theme from '../../../resources/Colors/theme';
import styles from './BakerCard.style';

const Bakers = (props) => {
  const {baker, onPress} = props;
  return (
    <View style={styles.mainCard}>
      <View>
        <View style={styles.companyInfo}>
          <View style={styles.companyImageContainer}>
            <Image
              style={styles.companyImage}
              source={require('../../../resources/images/vals-3.jpg')}
            />
            <View style={styles.chefInfo}>
              <View style={styles.companySign}>
                <Image
                  style={styles.companyLogo}
                  source={require('../../../resources/images/favicon.png')}
                />
              </View>
              <TouchableOpacity style={styles.companyInfoButton}>
                <Icons
                  name="ios-information-circle-outline"
                  size={16}
                  color={theme.WHITE_COLOR}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.rankContainer}>
              <Text style={styles.rankText}>Rank: {baker.rank}</Text>
              <TouchableOpacity
                style={styles.shopSign}
                activeOpacity={1}
                onPress={() => onPress()}>
                <Icons
                  name="ios-cart-outline"
                  size={16}
                  color={theme.SECONDARY_COLOR}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.companyCredentials}>
          <Text style={styles.companyFounder}>{baker.company_name}</Text>
          <Text style={styles.companyName}>{baker.rank} categories</Text>
        </View>
      </View>
    </View>
  );
};

export default Bakers;
