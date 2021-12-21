import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import Icons from 'react-native-vector-icons/Ionicons';
import theme from '../../../resources/Colors/theme.js';
import BASE_URL from '../../utils/globalVariable.js';

import styles from './BestBaker.style.js';

const BestBaker = (props) => {
  const {data, onPress, i18n} = props;
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        imageStyle={styles.bestBackground}
        style={styles.bestBackground}
        source={
          data?.ceoImage
            ? {uri: BASE_URL + '/' + data?.ceoImage}
            : require('../../../resources/images/bds-14.jpg')
        }>
        <LinearGradient
          style={styles.bestContainer}
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}
          colors={[
            theme.PRIMARY_COLOR + '05',
            theme.PRIMARY_COLOR + '30',
            theme.PRIMARY_COLOR + 'cd',
          ]}>
          <View style={styles.bestInfo}>
            <View style={styles.companySign}>
              <Image
                source={
                  data?.companyImage
                    ? {uri: BASE_URL + '/' + data?.companyImage}
                    : require('../../../resources/images/favicon.png')
                }
                style={styles.logo}
              />
            </View>
            <TouchableOpacity
              style={styles.bestInfoButton}
              onPress={() => Actions.chefInfo()}>
              <Icons
                name="ios-information-circle-outline"
                size={16}
                color={theme.SECONDARY_COLOR}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bestDetail}>
            <Text style={styles.chefRank}>
              {i18n.t('words.categories')}: {data?.categories.length}
            </Text>
            <Text style={styles.chefName}>{data?.name}</Text>
          </View>
          <View style={styles.infoContainer}>
            <TouchableOpacity style={styles.likesContainer}>
              <Icons
                name="ios-thumbs-up-outline"
                size={16}
                color={theme.WHITE_COLOR}
              />
              <Text style={styles.chefLikes}>{data?.likes?.users.length}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.likesContainer}>
              <Icons
                name="ios-thumbs-down-outline"
                size={16}
                color={theme.WHITE_COLOR}
              />
              <Text style={styles.chefLikes}>
                {data?.dislikes?.users.length}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.likesContainer}>
              <Icons
                name="ios-person-add-outline"
                size={16}
                color={theme.WHITE_COLOR}
              />
              <Text style={styles.chefLikes}>
                {data?.followers?.users.length}
              </Text>
            </TouchableOpacity>
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
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default BestBaker;
