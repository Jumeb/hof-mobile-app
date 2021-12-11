import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Text} from '..';

import styles from './OrderCard.style';

const OrderDetailsCard = (props) => {
  const {onPress} = props;
  return (
    <TouchableOpacity
      style={styles.detailCardContainer}
      onPress={() => onPress()}>
      <Image
        source={require('../../../resources/images/pans-2.jpg')}
        imageStyle={styles.detailImage}
        style={styles.detailImage}
      />
      <View style={styles.infoContain}>
        <Text style={styles.detailText}>Name of Product</Text>
        <Text style={styles.detailTextPrice}>
          XAF 40,000 <Text style={styles.detailTextQty}>Qty: 20</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderDetailsCard;
