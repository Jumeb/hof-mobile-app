import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Icons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import theme from '../../../resources/Colors/theme';
import {RateButton, Text} from '../../Components';
import {BASE_URL, KSeparator} from '../../utils';
import styles from './ItemDetail.style';
import {addCartObj, addToCart} from '../../redux/actions/CartAction';

const ItemDetail = (props) => {
  const {info, setInfo, i18n, item, user, cart} = props;

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [qty, setQty] = useState(false);
  const [notify, setNotify] = useState(false);
  const [dislikes, setDislikes] = useState(
    item?.pastryId?.dislikes?.users?.length,
  );
  const [likes, setLikes] = useState(item?.pastryId?.likes?.users?.length);

  useEffect(() => {
    setDislikes(item.pastryId?.dislikes.users.length);
    setLikes(item.pastryId?.likes.users.length);
  }, [item]);

  useEffect(() => {
    let _images = [];
    _images.push(item?.pastryId?.image);
    setImages(_images);
  }, [item?.pastryId?.image]);

  useEffect(() => {
    console.log(item);
    if (item && item?.pastryId) {
      setQty(item?.quantity);
    }
  }, [cart, item?.pastryId?._id, item]);

  const addToUserCart = (id) => {
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
          props.addCartObj(response?.cart);
          if (qty !== 0) {
            setQty(qty - 1);
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

  const disLikeItem = (id) => {
    setLoading(true);
    if (!user?.hasOwnProperty('name')) {
      setNotify(true);
      setInfo({
        type: 'success',
        msg:
          i18n.t('phrases.createAccountToDislike') +
          ' ' +
          item?.pastryid?.name +
          '.',
      });
      return false;
    }
    fetch(`${BASE_URL}/pastry/dislike/${id}?user=${user._id}`, {
      method: 'POST',
    })
      .then((res) => {
        const statusCode = res.status;
        const response = res.json();
        return Promise.all([statusCode, response]);
      })
      .then((res) => {
        const statusCode = res[0];
        const response = res[1].response;
        setLoading(false);

        if (statusCode === 200) {
          setLikes(response.likes.users.length);
          setDislikes(response.dislikes.users.length);
          // addLikes(response?.dislikes?.users);
          // addDislikes(response?.likes?.users);
        }

        if (statusCode === 500) {
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.anErrorOccured'),
          });
        }
      })
      .catch((err) => {
        if (err) {
          setLoading(false);
          setNotify(true);
          setInfo({
            type: 'error',
            title: 'Unexpected Error',
            msg: i18n.t('phrases.pleaseCheckInternet'),
          });
        }
      });
  };

  const likeItem = (id) => {
    setLoading(true);
    if (!user?.hasOwnProperty('name')) {
      setNotify(true);
      setInfo({
        type: 'success',
        msg:
          i18n.t('phrases.createAccountToLike') +
          ' ' +
          item?.pastryId?.name +
          '.',
      });
      return false;
    }
    fetch(`${BASE_URL}/pastry/like/${id}?user=${user._id}`, {
      method: 'POST',
    })
      .then((res) => {
        const statusCode = res.status;
        const response = res.json();
        return Promise.all([statusCode, response]);
      })
      .then((res) => {
        const statusCode = res[0];
        const response = res[1].response;
        setLoading(false);

        if (statusCode === 200) {
          setLikes(response.likes.users.length);
          setDislikes(response.dislikes.users.length);
          // addLikes(response?.dislikes?.users);
          // addDislikes(response?.likes?.users);
        }

        if (statusCode === 422) {
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.couldNotLikeItem'),
          });
        }

        if (statusCode === 500) {
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.anErrorOccured'),
          });
        }
      })
      .catch((err) => {
        if (err) {
          setLoading(false);
          setNotify(true);
          setInfo({
            type: 'error',
            title: 'Unexpected Error',
            msg: i18n.t('phrases.pleaseCheckInternet'),
          });
        }
      });
  };

  return (
    <Modal
      isVisible={info}
      propagateSwipe={true}
      style={styles.mainContainer}
      animationInTiming={500}
      animationOutTiming={400}
      backdropOpacity={0.55}
      backdropColor={theme.SECONDARY_COLOR}
      onBackdropPress={() => setInfo(false)}
      onBackButtonPress={() => setInfo(false)}
      swipeDirection={'down'}
      onSwipeComplete={() => setInfo(false)}>
      <View style={styles.detailContainer}>
        <TouchableOpacity
          style={styles.downIndicator}
          onPress={() => setInfo(false)}>
          <Icons
            name="ios-chevron-down-outline"
            size={16}
            color={theme.TERTIARY_COLOR}
          />
        </TouchableOpacity>
        <SwiperFlatList autoplay autoplayDelay={7} autoplayLoop>
          {images.map((d, key) => {
            return (
              <Header
                data={d}
                index={key + 1}
                length={images?.length}
                key={key}
              />
            );
          })}
        </SwiperFlatList>
        <View style={styles.infoContainer}>
          <Text style={styles.categoryName}>{item?.pastryId?.type}</Text>
          <View style={styles.detsContainer}>
            <Text style={styles.pastryName}>{item?.pastryId?.name}</Text>
            <Text style={styles.pastryPrice}>
              {KSeparator(item?.pastryId?.price ? item?.pastryId?.price : 0)}{' '}
              XAF
            </Text>
          </View>
          {item?.quantity && (
            <>
              <Text style={styles.aboutTitle}>
                {i18n.t('phrases.yourMessage')}
              </Text>
              <Text style={styles.aboutText}>
                {item?.message
                  ? item?.message
                  : i18n.t('phrases.addYourMessage')}{' '}
              </Text>
            </>
          )}
          <Text style={styles.aboutTitle}>
            {i18n.t('phrases.requiredDays')}
          </Text>
          <Text style={styles.aboutText}>
            {i18n.t('phrases.aMinimumOf')}{' '}
            <Text style={styles.date}>{item?.pastryId?.daysRequired}</Text>{' '}
            {i18n.t('phrases.daysIsRequiredForDelivery')}
          </Text>
          <View style={styles.rateContainer}>
            <RateButton
              title={likes}
              icon={
                item &&
                item?.pastryId?.likes?.users?.findIndex(
                  (p) => p.userId?.toString() === user?._id.toString(),
                ) >= 0
                  ? 'ios-thumbs-up-sharp'
                  : 'ios-thumbs-up-outline'
              }
              onPress={() => likeItem(item?.pastryId?._id)}
            />
            <RateButton
              title={dislikes}
              icon={
                item &&
                item?.pastryId?.dislikes?.users?.findIndex(
                  (p) => p.userId?.toString() === user?._id.toString(),
                ) >= 0
                  ? 'ios-thumbs-down-sharp'
                  : 'ios-thumbs-down-outline'
              }
              onPress={() => disLikeItem(item?.pastryId?._id)}
            />
          </View>
        </View>
        <View style={styles.controlsContainer}>
          {item?.quantity && (
            <View style={styles.qtyContainer}>
              <Text style={styles.accumelatedPrice}>
                {KSeparator(
                  item?.pastryId?.discount > 0
                    ? ((100 - item?.pastryId?.discount) / 100) *
                        item?.pastryId?.price *
                        qty
                    : item?.pastryId?.price
                    ? qty * item?.pastryId?.price
                    : 0,
                )}{' '}
                XAF
              </Text>

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={() => subFromCart(item?.pastryId._id)}>
                  <Icons
                    name="ios-remove-outline"
                    size={16}
                    color={theme.WHITE_COLOR}
                  />
                </TouchableOpacity>
                <Text style={styles.qtyText}>{qty}</Text>
                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={() => addToUserCart(item?.pastryId._id)}>
                  <Icons
                    name="ios-add-outline"
                    size={16}
                    color={theme.WHITE_COLOR}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    </Modal>
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
  return bindActionCreators({addCartObj, addToCart}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);

const Header = (props) => {
  const {length, index, data} = props;
  return (
    <View style={styles.pastryContainer}>
      <Image
        source={
          data
            ? {uri: BASE_URL + '/' + data}
            : require('../../../resources/images/logo-1.png')
        }
        style={styles.pastryImage}
        imageStyle={styles.pastryImage}
      />
      <View style={styles.pastryImageCounter}>
        <Text style={styles.pastryIndex}>{index}</Text>
        <Text style={styles.pastryLength}>/{length}</Text>
      </View>
    </View>
  );
};
