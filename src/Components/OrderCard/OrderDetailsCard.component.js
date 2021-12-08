import React from 'react';
import {Image, View} from 'react-native';
import {Text} from '..';

import styles from './OrderCard.style';

const OrderDetailsCard = () => {
  return (
    <View style={styles.detailCardContainer}>
      <Image
        source={require('../../../resources/images/pans-2.jpg')}
        imageStyle={styles.detailImage}
        style={styles.detailImage}
      />
      <Text style={styles.detailText}>Name of Product</Text>
    </View>
  );
};

export default OrderDetailsCard;
