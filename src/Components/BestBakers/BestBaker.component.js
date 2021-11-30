import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/Ionicons';
import theme from '../../../resources/Colors/theme.js';

import styles from './BestBaker.style.js';

const BestBaker = (props) => {
  const {data, onPress} = props;
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        imageStyle={styles.bestBackground}
        style={styles.bestBackground}
        source={require('../../../resources/images/bds-14.jpg')}>
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
                source={require('../../../resources/images/favicon.png')}
                style={styles.logo}
              />
            </View>
            <TouchableOpacity style={styles.bestInfoButton}>
              <Icons
                name="ios-information-circle-outline"
                size={16}
                color={theme.SECONDARY_COLOR}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bestDetail}>
            <Text style={styles.chefRank}>Categories: {data.rank}</Text>
            <Text style={styles.chefName}>{data.ceo_name}</Text>
          </View>
          <View style={styles.infoContainer}>
            <TouchableOpacity style={styles.likesContainer}>
              <Icons
                name="ios-thumbs-up-outline"
                size={16}
                color={theme.WHITE_COLOR}
              />
              <Text style={styles.chefLikes}>{data.rank}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.likesContainer}>
              <Icons
                name="ios-thumbs-down-outline"
                size={16}
                color={theme.WHITE_COLOR}
              />
              <Text style={styles.chefLikes}>{data.rank}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.likesContainer}>
              <Icons
                name="ios-heart-outline"
                size={16}
                color={theme.WHITE_COLOR}
              />
              <Text style={styles.chefLikes}>{data.rank}</Text>
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
