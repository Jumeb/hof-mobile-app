import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import styles from './ReviewCard.style';
import theme from '../../../resources/Colors/theme';

const ReviewCard = (props) => {
  const {onPress} = props;
  return (
    <TouchableOpacity style={styles.bakerContainer} onPress={() => onPress()}>
      <View style={styles.bakerImageContainer}>
        <Image
          source={require('../../../resources/images/bds-1.jpg')}
          style={styles.bakerImage}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.bakerInfo}>
          <Text style={styles.bakerName}>Review Card</Text>
          <Text style={styles.bakerCompany}>Review Card</Text>
        </View>
        <View style={styles.reviews}>
          <Text style={styles.reviewsNumber}>300</Text>
          <View style={styles.reviewStats}>
            <Icons
              name="stats-chart-outline"
              size={15}
              color={theme.light_grey}
            />
            <Text style={styles.reviewsText}>Reviews</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReviewCard;
