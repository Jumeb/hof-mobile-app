import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Notification, Text} from '..';
import theme from '../../../resources/Colors/theme';
import {BASE_URL, KSeparator, Storage} from '../../utils';
import styles from './Pastrycard.style';
import {addToCart} from '../../redux/actions/CartAction';
import {addToFavourites} from '../../redux/actions/FavouritesActions';

const FavouriteCard = (props) => {
  const {
    onPress,
    setDelete,
    setIsDelete,
    setIsItem,
    setItem,
    item,
    i18n,
    user,
  } = props;
  const [dislikes, setDislikes] = useState(
    item?.pastryId?.dislikes?.users?.length,
  );
  const [likes, setLikes] = useState(item?.pastryId?.likes?.users?.length);
  const [loading, setLoading] = useState(false);
  const [notify, setNotify] = useState(false);
  const [info, setInfo] = useState({});

  useEffect(() => {
    setDislikes(item.pastryId?.dislikes.users.length);
    setLikes(item.pastryId?.likes.users.length);
  }, [item]);

  const itemDetail = (data) => {
    setIsItem(true);
    setItem(data);
  };

  const itemDelete = (data) => {
    setDelete(data);
    setIsDelete(true);
  };

  const addToUserCart = (id) => {
    setLoading(true);
    if (!user?.hasOwnProperty('name')) {
      setNotify(true);
      setInfo({
        type: 'success',
        msg: i18n.t('phrases.createToAddToCart'),
      });
      return false;
    }
    fetch(`${BASE_URL}/user/addToCart/${id}?user=${user._id}`, {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
    })
      .then((res) => {
        const statusCode = res.status;
        const response = res.json();
        return Promise.all([statusCode, response]);
      })
      .then((res) => {
        const statusCode = res[0];
        const response = res[1];
        //console.log(response);
        setLoading(false);

        if (statusCode === 200) {
          Storage.storeInfo('USER', response?.user);
          Storage.storeInfo('FAVOURITES', response?.user?.favourites);
          props.addToCart(response?.user?.cart);
          setNotify(true);
          setInfo({
            type: 'success',
            msg: i18n.t('phrases.addedToCart'),
          });
        }

        if (statusCode === 422) {
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.couldNotDislikeItem'),
          });
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          setLoading(false);
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
    <View style={styles.mainContainer}>
      <View style={styles.pastryImageContainer}>
        <Image
          source={
            item?.pastryId?.image
              ? {uri: BASE_URL + '/' + item?.pastryId?.image}
              : require('../../../resources/images/logo-1.png')
          }
          imageStyle={styles.pastryImage}
          style={styles.pastryImage}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.pastryDetails}>
          <Text style={styles.pastryName}>
            {item?.pastryId?.name?.substr(0, 20)}
            {item?.pastryId?.name?.length >= 20 && '...'}
          </Text>
          <TouchableOpacity
            style={styles.bestInfoButton}
            onPress={() => itemDelete(item)}>
            <Icons
              name="ios-trash-outline"
              size={16}
              color={theme.DANGER_COLOR}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.pastryDetails}>
          <View style={styles.pastryStats}>
            <Text style={styles.pastryPrice}>
              {KSeparator(item?.pastryId?.price)}
            </Text>
            <Text style={styles.currency}> XAF</Text>
          </View>
          {/* <View style={styles.bestInfo}> */}
          {item?.pastryId?.discount > 0 && (
            <View style={styles.bestDiscount}>
              <Icons
                name="ios-trending-down-outline"
                size={16}
                color={theme.WHITE_COLOR}
              />

              <Text style={styles.bestDiscountText}>
                {item?.pastryId?.discount}%
              </Text>
            </View>
          )}
          {/* </View> */}
        </View>
        <View style={styles.pastryDetails}>
          <TouchableOpacity
            style={styles.likesContainer}
            onPress={() => likeItem(item?.pastryId?._id)}>
            <Icons
              name={
                item &&
                item?.pastryId?.likes?.users?.findIndex(
                  (p) => p.userId?.toString() === user?._id.toString(),
                ) >= 0
                  ? 'ios-thumbs-up-sharp'
                  : 'ios-thumbs-up-outline'
              }
              size={16}
              color={theme.SECONDARY_COLOR}
            />
            <Text style={styles.pastryLikes}>{likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.likesContainer}
            onPress={() => disLikeItem(item?.pastryId?._id)}>
            <Icons
              name={
                item &&
                item?.pastryId?.dislikes?.users?.findIndex(
                  (p) => p.userId?.toString() === user?._id.toString(),
                ) >= 0
                  ? 'ios-thumbs-down-sharp'
                  : 'ios-thumbs-down-outline'
              }
              size={16}
              color={theme.SECONDARY_COLOR}
            />
            <Text style={styles.pastryLikes}>{dislikes}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.likesContainer}
            onPress={() => itemDetail(item)}>
            <Icons
              name="ios-information-circle-outline"
              size={16}
              color={theme.SECONDARY_COLOR}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => addToUserCart(item?.pastryId?._id)}>
            <Icons name="ios-add-outline" size={16} color={theme.WHITE_COLOR} />
          </TouchableOpacity>
        </View>
      </View>
      <Notification notify={notify} setNotify={setNotify} info={info} />
    </View>
  );
};
const mapStateToProps = ({auth, favourites, i18n}) => {
  return {
    user: auth.user,
    favourites: favourites.favourites,
    _likes: favourites.likes,
    _dislikes: favourites.dislikes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addToCart, addToFavourites}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteCard);
