import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import {Image, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import styles from './CartCard.style';
import {Text} from '..';
import theme from '../../../resources/Colors/theme';
import {BASE_URL, KSeparator} from '../../utils';
import {setUser} from '../../redux/actions/AuthActions';
import {addToCart, addCartObj} from '../../redux/actions/CartAction';

const CartCard = (props) => {
  const {item, setItem, setIsItem, setDelete, setIsDelete, user, i18n} = props;

  const [loading, setLoading] = useState(false);
  const [notify, setNotify] = useState(false);
  const [info, setInfo] = useState({});
  const [qty, setQty] = useState(0);

  const itemDetail = (data) => {
    setIsItem(true);
    setItem(data);
  };

  const itemDelete = (data) => {
    setDelete(data);
    setIsDelete(true);
  };

  // useEffect(() => {
  //   console.log(cart, 'hello', item);
  //   console.log(
  //     cart?.pastries.filter(
  //       (items) => items.pastryId.toString() === item?.pastryId?._id.toString(),
  //     ),
  //   );
  // }, [cart, item?.pastryId?._id, item]);

  const AddToCart = (id) => {
    setLoading(true);
    if (!user.hasOwnProperty('name')) {
      setNotify(true);
      setInfo({
        type: 'success',
        msg: i18n.t('phrases.pleaseGetAnAccount'),
      });
      return false;
    }
    fetch(`${BASE_URL}/user/addToCart/${id}?user=${user._id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        const statusCode = res.status;
        const response = res.json();
        return Promise.all([statusCode, response]);
      })
      .then((res) => {
        const statusCode = res[0];
        const response = res[1];
        setLoading(false);

        if (statusCode === 200) {
          props.addToCart(response?.user?.cart);
          props.addCartObj(response?.cart);
          setQty(qty + 1);
          if (qty === 0) {
            setNotify(true);
            setInfo({
              type: 'success',
              msg: `${item?.pastryId?.name} added to cart`,
            });
          }
        }

        if (statusCode === 422) {
          setNotify(true);
          setInfo({
            type: 'error',
            msg: `${item?.pastryId?.name} not added to cart.`,
          });
        }
      })
      .catch((err) => {
        if (err) {
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.pleaseCheckInternet'),
          });
        }
      });
  };

  const subFromCart = (id) => {
    setLoading(true);
    fetch(`${BASE_URL}/user/subFromCart/${id}?user=${user._id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        const statusCode = res.status;
        const response = res.json();
        return Promise.all([statusCode, response]);
      })
      .then((res) => {
        const statusCode = res[0];
        const response = res[1];
        setLoading(false);

        if (statusCode === 200) {
          props.addToCart(response?.user?.cart);
          if (qty !== 0) {
            setQty(qty - 1);
            props.addCartObj(response?.cart);
          }
        }

        if (statusCode === 422) {
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.couldNotAddToCart'),
          });
        }
      })
      .catch((err) => {
        if (err) {
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.pleaseCheckInternet'),
          });
        }
      });
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
          <Text style={styles.cardPastryName}>
            {item?.pastryId?.name?.substr(0, 20)}
            {item?.pastryId?.name?.length >= 20 && '...'}
          </Text>
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
                    item?.quantity
                : item?.quantity * item.pastryId.price,
            )}{' '}
            XAF
          </Text>
        </View>
        <View style={styles.cardControls}>
          <View style={styles.amountContainer}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => subFromCart(item?.pastryId?._id)}>
              <Icons
                name="ios-remove-outline"
                size={18}
                color={theme.WHITE_COLOR}
              />
            </TouchableOpacity>
            <Text style={styles.quantity}>{KSeparator(item?.quantity)}</Text>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => AddToCart(item?.pastryId?._id)}>
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
const mapStateToProps = ({i18n, auth, cart}) => {
  return {
    i18n: i18n.i18n,
    user: auth.user,
    cart: cart.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setUser, addToCart, addCartObj}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CartCard);
