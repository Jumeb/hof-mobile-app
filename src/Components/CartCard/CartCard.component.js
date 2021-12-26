import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import {Image, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import styles from './CartCard.style';
import {Text} from '..';
import theme from '../../../resources/Colors/theme';
import {BASE_URL, KSeparator, Storage} from '../../utils';
import {setUser} from '../../redux/actions/AuthActions';
import {addToCart} from '../../redux/actions/CartAction';

const CartCard = (props) => {
  const {item, setItem, setIsItem, setDelete, setIsDelete} = props;

  const [loading, setLoading] = useState(false);
  const [notify, setNotify] = useState(false);
  const [info, setInfo] = useState({});

  const itemDetail = (data) => {
    setIsItem(true);
    setItem(data);
  };

  const itemDelete = (data) => {
    setDelete(data);
    setIsDelete(true);
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImageContainer}>
        <Image
          source={
            item?.pastryId?.image
              ? {uri: BASE_URL + '/' + item?.pastryId?.image}
              : require('../../../resources/images/logo-1.png')
          }
          imageStyle={styles.cardImage}
          style={styles.cardImage}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.cardDetails}>
          <Text style={styles.cardPastryName}>{item?.pastryId?.name}</Text>
          <TouchableOpacity
            onPress={() => itemDetail(item)}
            style={styles.bestInfoButton2}>
            <Icons
              name="ios-information-circle-outline"
              size={16}
              color={theme.SECONDARY_COLOR}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cardDetails}>
          <Text style={styles.amount}>
            {KSeparator(
              item.pastryId.discount > 0
                ? ((100 - item.pastryId.discount) / 100) *
                    item.pastryId.price *
                    item.quantity
                : item.quantity * item.pastryId.price,
            )}{' '}
            XAF
          </Text>
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
            <Text style={styles.quantity}>{KSeparator(item?.quantity)}</Text>
            <TouchableOpacity style={styles.actionButton}>
              <Icons
                name="ios-add-outline"
                size={18}
                color={theme.WHITE_COLOR}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.trashButton}
            onPress={() => itemDelete(item)}>
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
const mapStateToProps = ({i18n, auth}) => {
  return {
    i18n: i18n.i18n,
    user: auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setUser, addToCart}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CartCard);
