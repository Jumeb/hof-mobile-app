import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './SendMessage.style';

const SendMessage = (props) => {
  const {showImage, sent} = props;
  return (
    <View
      style={[
        sent ? styles.sentContainer : styles.receiveContainer,
        !showImage && {padding: 5},
      ]}>
      {showImage ? (
        <Image
          source={require('../../../resources/images/bds-12.jpg')}
          style={styles.reviewImage}
        />
      ) : (
        <Text style={styles.reviewText}>
          Cara Cakes is the best in town, absolutely nothing test better than
          theirs.
        </Text>
      )}
      <View />
    </View>
  );
};

export default SendMessage;
