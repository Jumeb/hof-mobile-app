import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icons from 'react-native-vector-icons/Ionicons';
import {Text} from '..';

import theme from '../../../resources/Colors/theme';

import styles from './Pastrycard.style';

const FavouriteCard = (props) => {
  const {onPress} = props;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.pastryImageContainer}>
        <Image
          source={require('../../../resources/images/vals-3.jpg')}
          imageStyle={styles.pastryImage}
          style={styles.pastryImage}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.pastryDetails}>
          <Text style={styles.pastryName}>Love Aurora</Text>
          <TouchableOpacity style={styles.bestInfoButton}>
            <Icons
              name="ios-trash-outline"
              size={16}
              color={theme.DANGER_COLOR}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.pastryDetails}>
          <View style={styles.pastryStats}>
            <Text style={styles.pastryPrice}>250,000</Text>
            <Text style={styles.currency}>XAF</Text>
          </View>
          {/* <View style={styles.bestInfo}> */}
          <View style={styles.bestDiscount}>
            <Icons
              name="ios-trending-down-outline"
              size={16}
              color={theme.WHITE_COLOR}
            />
            <Text style={styles.bestDiscountText}>20%</Text>
          </View>
          {/* </View> */}
        </View>
        <View style={styles.pastryDetails}>
          <TouchableOpacity style={styles.likesContainer}>
            <Icons
              name="ios-thumbs-up-outline"
              size={16}
              color={theme.SECONDARY_COLOR}
            />
            <Text style={styles.pastryLikes}>{1}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.likesContainer}>
            <Icons
              name="ios-thumbs-down-outline"
              size={16}
              color={theme.SECONDARY_COLOR}
            />
            <Text style={styles.pastryLikes}>{3}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.likesContainer}
            onPress={() => onPress()}>
            <Icons
              name="ios-information-circle-outline"
              size={16}
              color={theme.SECONDARY_COLOR}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.addToCartButton}>
            <Icons name="ios-add-outline" size={16} color={theme.WHITE_COLOR} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FavouriteCard;
