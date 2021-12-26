import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icons from 'react-native-vector-icons/Ionicons';

import theme from '../../../resources/Colors/theme';
import {BASE_URL} from '../../utils';
import styles from './BakerCard.style';

const Bakers = (props) => {
  const {baker, rank, onPress, i18n} = props;
  return (
    <View style={styles.mainCard}>
      <View>
        <View style={styles.companyInfo}>
          <View style={styles.companyImageContainer}>
            <Image
              style={styles.companyImage}
              source={
                baker?.ceoImage
                  ? {uri: BASE_URL + '/' + baker?.ceoImage}
                  : require('../../../resources/images/vals-3.jpg')
              }
            />
            <View style={styles.chefInfo}>
              <View style={styles.companySign}>
                <Image
                  style={styles.companyLogo}
                  source={
                    baker?.companyImage
                      ? {uri: BASE_URL + '/' + baker?.companyImage}
                      : require('../../../resources/images/favicon.png')
                  }
                />
              </View>
              <TouchableOpacity
                style={styles.companyInfoButton}
                onPress={() => Actions.chefInfo({chef: baker})}>
                <Icons
                  name="ios-information-circle-outline"
                  size={16}
                  color={theme.WHITE_COLOR}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.rankContainer}>
              <Text style={styles.rankText}>
                {i18n.t('words.rank')}: {rank}
              </Text>
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
          <Text style={styles.companyFounder}>{baker?.name}</Text>
          <Text style={styles.companyName}>
            {i18n.t('words.categories')}: {baker?.categories.length}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Bakers;
