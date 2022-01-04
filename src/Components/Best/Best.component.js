import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Notification} from '..';
import theme from '../../../resources/Colors/theme';
import {BASE_URL, FormatUnits, Storage} from '../../utils';
import Thousand from '../../utils/kSeparator';
import styles from './Best.style';
import {addToCart} from '../../redux/actions/CartAction';
import {
  addToFavourites,
  addDislikes,
  addLikes,
} from '../../redux/actions/FavouritesActions';

const Best = (props) => {
  const {
    data,
    onPress,
    i18n,
    user,
    favourites,
    addToFavourites,
    _likes,
    _dislikes,
  } = props;
  const [loading, setLoading] = useState(false);
  const [dislikes, setDislikes] = useState(data.dislikes.users.length);
  const [likes, setLikes] = useState(data.likes.users.length);
  const [notify, setNotify] = useState(false);
  const [info, setInfo] = useState({});

  useEffect(() => {
    // //console.log(user);
    setDislikes(data.dislikes.users.length);
    setLikes(data.likes.users.length);
  }, [data]);

  const addToFavourite = (id) => {
    setLoading(true);
    if (!user?.hasOwnProperty('name')) {
      setNotify(true);
      setInfo({
        type: 'success',
        msg: i18n.t('phrases.createAccountToAdd') + ' ' + data?.name + '.',
      });
      return false;
    }
    fetch(`${BASE_URL}/user/addToFavourite/${id}?userId=${user._id}`, {
      method: 'POST',
    })
      .then((res) => {
        const statusCode = res.status;
        const responseJson = res.json();
        return Promise.all([statusCode, responseJson]);
      })
      .then((res) => {
        const statusCode = res[0];
        const response = res[1];
        setLoading(false);
        if (statusCode === 200) {
          addToFavourites(response?.user?.favourites);
          setNotify(true);
          setInfo({
            type: 'success',
            msg: i18n.t('phrases.addedToFavourite'),
          });
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

  const disLikeItem = (id) => {
    setLoading(true);
    if (!user?.hasOwnProperty('name')) {
      setNotify(true);
      setInfo({
        type: 'success',
        msg: i18n.t('phrases.createAccountToDislike') + ' ' + data?.name + '.',
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
        msg: i18n.t('phrases.createAccountToLike') + ' ' + data?.name + '.',
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
          data?.image
            ? {uri: BASE_URL + '/' + data?.image}
            : require('../../../resources/images/pans-2.jpg')
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
            {data?.discount !== 0 && (
              <View style={styles.bestDiscount}>
                <Icons
                  name="ios-trending-down-outline"
                  size={16}
                  color={theme.SUCCESS_COLOR}
                />
                <Text style={styles.bestDiscountText}>{data?.discount}%</Text>
              </View>
            )}
            <TouchableOpacity
              style={styles.bestInfoButton}
              onPress={() => onPress(data)}>
              <Icons
                name="ios-information-circle-outline"
                size={16}
                color={theme.SECONDARY_COLOR}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.infoContainer}>
            <TouchableOpacity
              style={styles.likesContainer}
              onPress={() => likeItem(data?._id)}>
              <Icons
                name={
                  data &&
                  data?.likes?.users?.findIndex(
                    (p) => p.userId?.toString() === user?._id.toString(),
                  ) >= 0
                    ? 'ios-thumbs-up-sharp'
                    : 'ios-thumbs-up-outline'
                }
                size={16}
                color={theme.WHITE_COLOR}
              />
              <Text style={styles.pastryLikes}>{FormatUnits(likes)}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.likesContainer}
              onPress={() => disLikeItem(data?._id)}>
              <Icons
                name={
                  data &&
                  data?.dislikes?.users?.findIndex(
                    (p) => p.userId?.toString() === user?._id.toString(),
                  ) >= 0
                    ? 'ios-thumbs-down-sharp'
                    : 'ios-thumbs-down-outline'
                }
                size={16}
                color={theme.WHITE_COLOR}
              />
              <Text style={styles.pastryLikes}>{FormatUnits(dislikes)}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.likesContainer2}
              onPress={() => addToFavourite(data?._id)}>
              <Icons
                name={
                  favourites &&
                  favourites?.findIndex(
                    (p) => p.pastryId?.toString() === data?._id.toString(),
                  ) >= 0
                    ? 'ios-heart-sharp'
                    : 'ios-heart-outline'
                }
                // name="ios-heart-outline"
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
            {data?.name?.substr(0, 22)}
            {data?.name?.length >= 22 && '...'}
          </Text>
          <Text style={styles.pastryPrice}>{Thousand(data?.price)} XAF</Text>
        </View>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => addToUserCart(data?._id)}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Best);
