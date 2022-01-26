import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Text} from '..';
import {BASE_URL, KSeparator} from '../../utils';

import styles from './OrderCard.style';

const OrderDetailsCard = (props) => {
  const {onPress, item, i18n} = props;
  return (
    <TouchableOpacity
      style={styles.detailCardContainer}
      onPress={() => onPress()}>
      <Image
        source={
          item?.pastryId?.image
            ? {uri: `${BASE_URL}/${item?.pastryId?.image[0]}`}
            : require('../../../resources/images/pans-2.jpg')
        }
        imageStyle={styles.detailImage}
        style={styles.detailImage}
      />
      <View style={styles.infoContain}>
        <Text style={styles.detailText}>{item?.pastryId?.name}</Text>
        <Text style={styles.detailTextPrice}>
          {KSeparator(
            item.pastryId.discount > 0
              ? ((100 - item.pastryId.discount) / 100) *
                  item.pastryId.price *
                  item?.quantity
              : item?.quantity * item.pastryId.price,
          )}{' '}
          XAF {'  '}
          <Text style={styles.detailTextQty}>
            {i18n.t('words.quantity')}: {item?.quantity}
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderDetailsCard;
