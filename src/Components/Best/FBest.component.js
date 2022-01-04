import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Notification} from '..';
import theme from '../../../resources/Colors/theme';
import {BASE_URL, KSeparator, Storage} from '../../utils';
import styles from './Best.style';
import {addToCart} from '../../redux/actions/CartAction';
import {
  addToFavourites,
  addDislikes,
  addLikes,
} from '../../redux/actions/FavouritesActions';

const BestFavourite = (props) => {
  const {
    item,
    onPress,
    setDelete,
    setIsDelete,
    setIsItem,
    setItem,
    user,
    i18n,
  } = props;
  const [dislikes, setDislikes] = useState(
    item?.pastryId?.dislikes?.users?.length,
  );
  const [likes, setLikes] = useState(item?.pastryId?.likes?.users?.length);
  const [notify, setNotify] = useState(false);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);

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
        setLoading(false);

        if (statusCode === 200) {
          Storage.storeInfo('USER', response?.user);
          Storage.storeInfo('FAVOURITES', response?.user?.favourites);
          props.addToCart(response?.user?.cart);
          setNotify(true);
          setInfo({
            type: 'success',
            msg: i18n.t('phrases.addedToCart'),
            title: 'Success',
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
      <ImageBackground
        imageStyle={styles.bestBackground}
        style={styles.bestBackground}
        source={
          item?.pastryId?.image
            ? {uri: BASE_URL + '/' + item?.pastryId?.image}
            : require('../../../resources/images/logo-1.png')
        }>
        <LinearGradient
          style={styles.bestContainer}
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}
          colors={[
            theme.PRIMARY_COLOR + '05',
            theme.PRIMARY_COLOR + '20',
            theme.PRIMARY_COLOR + 'aa',
          ]}>
          <View style={styles.bestInfo}>
            {item?.pastryId?.discount > 0 && (
              <View style={styles.bestDiscount}>
                <Icons
                  name="ios-trending-down-outline"
                  size={16}
                  color={theme.SUCCESS_COLOR}
                />
                <Text style={styles.bestDiscountText}>
                  {item?.pastryId?.discount}%
                </Text>
              </View>
            )}
            <TouchableOpacity
              style={styles.trashButton}
              onPress={() => itemDelete(item)}>
              <Icons
                name="ios-trash-outline"
                size={16}
                color={theme.WHITE_COLOR}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.infoContainer}>
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
                color={theme.WHITE_COLOR}
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
                color={theme.WHITE_COLOR}
              />
              <Text style={styles.pastryLikes}>{dislikes}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.likesContainer2}
              onPress={() => itemDetail(item)}>
              <Icons
                name="ios-information-circle-outline"
                size={16}
                color={theme.WHITE_COLOR}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={styles.bestDetail}>
        <View>
          <Text style={styles.pastryName}>
            {item?.pastryId?.name?.substr(0, 22)}
            {item?.pastryId?.name?.length >= 22 && '...'}
          </Text>
          <Text style={styles.pastryPrice}>
            {KSeparator(item?.pastryId?.price)} XAF
          </Text>
        </View>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => addToUserCart(item?.pastryId?._id)}>
          <Icons name="ios-add-outline" size={16} color={theme.WHITE_COLOR} />
        </TouchableOpacity>
      </View>
      <Notification notify={notify} setNotify={setNotify} info={info} />
    </View>
  );
};
const mapStateToProps = ({auth, favourites}) => {
  return {
    user: auth.user,
    favourites: favourites.favourites,
    _likes: favourites.likes,
    _dislikes: favourites.dislikes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {addToCart, addToFavourites, addLikes, addDislikes},
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BestFavourite);
