import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import {Image, TouchableOpacity, View} from 'react-native';

import styles from './CartCard.style';
import {Text} from '..';
import theme from '../../../resources/Colors/theme';

const CartCard = (props) => {
  const {onPress} = props;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImageContainer}>
        <Image
          source={require('../../../resources/images/vals-3.jpg')}
          imageStyle={styles.cardImage}
          style={styles.cardImage}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.cardDetails}>
          <Text style={styles.cardPastryName}>Love Aurora</Text>
          <TouchableOpacity
            // onPress={() => onPress()}
            style={styles.bestInfoButton2}>
            <Icons
              name="ios-information-circle-outline"
              size={16}
              color={theme.SECONDARY_COLOR}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cardDetails}>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>XAF 3,000</Text>
            {/* <Text style={styles.quantity}>&times; 2</Text> */}
          </View>
        </View>
        <View style={styles.cardControls}>
          <View style={styles.amountContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <Icons
                name="ios-remove-outline"
                size={18}
                color={theme.WHITE_COLOR}
              />
            </TouchableOpacity>
            <Text style={styles.quantity}>2</Text>
            <TouchableOpacity style={styles.actionButton}>
              <Icons
                name="ios-add-outline"
                size={18}
                color={theme.WHITE_COLOR}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.trashButton}>
            <Icons
              name="ios-trash-outline"
              size={18}
              color={theme.WHITE_COLOR}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartCard;
