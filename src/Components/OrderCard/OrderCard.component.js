import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import {Text} from '..';
import theme from '../../../resources/Colors/theme';
import {setItems} from '../../redux/actions/AuthActions';
import {ItemsDetail} from '../../sections';
import styles from './OrderCard.style';

const OrderCard = (props) => {
  const {i18n} = props;
  const [info, setInfo] = useState(false);

  const SetItem = () => {
    setInfo(true);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.orderImageContainer}>
        <Image
          source={require('../../../resources/images/bds-14.jpg')}
          imageStyle={styles.orderImage}
          style={styles.orderImage}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.pastryDetails}>
          <Text style={styles.pastryName}>Love Aurora</Text>
          {/* <TouchableOpacity style={styles.bestInfoButton}>
            <Icons
              name="ios-trash-outline"
              size={16}
              color={theme.DANGER_COLOR}
            />
          </TouchableOpacity> */}
        </View>
        <View style={[styles.pastryDetails, styles.bottomMargin]}>
          <View style={styles.pastryStats}>
            <Text style={styles.pastryPrice}>250,000</Text>
            <Text style={styles.currency}>XAF</Text>
          </View>
          {/* <View style={styles.bestInfo}> */}
          {/* <View style={styles.bestDiscount}>
            <Icons
              name="ios-trending-down-outline"
              size={16}
              color={theme.WHITE_COLOR}
            />
            <Text style={styles.bestDiscountText}>20%</Text>
          </View> */}
          {/* </View> */}
        </View>
        <View style={styles.pastryDetails}>
          <Text style={styles.quantityText}>{i18n.t('words.quantity')}: 1</Text>
        </View>
        <View style={styles.pastryDetails}>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => SetItem()}>
            <Icons
              name="ios-document-outline"
              size={16}
              color={theme.WHITE_COLOR}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ItemsDetail info={info} setInfo={setInfo} />
    </View>
  );
};

export default OrderCard;
