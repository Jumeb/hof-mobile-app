import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Notification, Text} from '..';
import theme from '../../../resources/Colors/theme';
import {BASE_URL, FormatUnits, Storage} from '../../utils';
import Thousand from '../../utils/kSeparator';
import styles from './Pastrycard.style';
import {addToCart} from '../../redux/actions/CartAction';
import {
  addToFavourites,
  addLikes,
  addDislikes,
} from '../../redux/actions/FavouritesActions';
import {Today} from '../../utils/date';

const PastryCard = (props) => {
  const {
    layout,
    onPress,
    data,
    user,
    i18n,
    favourites,
    addToFavourites,
    addDislikes,
    addLikes,
    _likes,
    _dislikes,
  } = props;
  const [loading, setLoading] = useState(false);
  const [dislikes, setDislikes] = useState(data?.dislikes?.users?.length);
  const [likes, setLikes] = useState(data?.likes?.users?.length);
  const [notify, setNotify] = useState(false);
  const [userLikes, setUserLikes] = useState([]);
  const [userDislikes, setUserDislikes] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    setDislikes(data.dislikes.users.length);
    setLikes(data.likes.users.length);
  }, [data]);

  useEffect(() => {
    // console.log(_likes);
    setUserLikes(_likes);
    setUserDislikes(_dislikes);
  }, [_likes, _dislikes]);

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
          // console.log(response);
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
          // addLikes(id);
          // addDislikes(id);
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
          // addLikes(id);
          // addDislikes(id);
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
          setLoading(false);
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.pleaseCheckInternet'),
          });
        }
      });
  };

  return (
    <>
      {layout === 0 ? (
        <View style={styles.mainContainer2}>
          <View style={styles.pastryImageContainer2}>
            <Image
              source={
                data?.image
                  ? {uri: `${BASE_URL}/${data?.image[0]}`}
                  : require('../../../resources/images/weds-2.jpg')
              }
              imageStyle={styles.pastryImage2}
              style={styles.pastryImage2}
            />
            <View style={styles.bestInfo2}>
              {data?.discount !== 0 && (
                <View style={styles.bestDiscount2}>
                  <Icons
                    name="ios-trending-down-outline"
                    size={16}
                    color={theme.SUCCESS_COLOR}
                  />
                  <Text style={styles.bestDiscountText2}>
                    {data?.discount}%
                  </Text>
                </View>
              )}
              <TouchableOpacity
                onPress={() => onPress(data)}
                style={styles.bestInfoButton2}>
                <Icons
                  name="ios-information-circle-outline"
                  size={16}
                  color={theme.SECONDARY_COLOR}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.infoContainer2}>
              <TouchableOpacity
                style={styles.likesContainer2}
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
                <Text style={styles.pastryLikes2}>{FormatUnits(likes)}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.likesContainer2}
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
                <Text style={styles.pastryLikes2}>{FormatUnits(dislikes)}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.likesContainer2}
                onPress={() => addToFavourite(data?._id)}>
                <Icons
                  name={
                    favourites?.findIndex(
                      (p) => p.pastryId.toString() === data?._id.toString(),
                    ) >= 0
                      ? 'ios-heart-sharp'
                      : 'ios-heart-outline'
                  }
                  size={16}
                  color={theme.WHITE_COLOR}
                />
              </TouchableOpacity>
            </View>
            <LinearGradient
              style={styles.bestContainer2}
              start={{x: 1, y: 0}}
              end={{x: 1, y: 1}}
              colors={[
                theme.PRIMARY_COLOR + '05',
                theme.PRIMARY_COLOR + '20',
                theme.PRIMARY_COLOR + 'aa',
              ]}
            />
          </View>
          <View style={styles.pastryDetails2}>
            <View style={styles.grid2}>
              <Text style={styles.pastryName2}>
                {data?.name?.substr(0, 15)}
                {data?.name?.length >= 15 && '...'}
              </Text>
              <View style={styles.pastryStats2}>
                <Text style={styles.pastryPrice2}>{Thousand(data?.price)}</Text>
                <Text style={styles.currency2}>XAF</Text>
              </View>
            </View>
            {data?.isAvailable &&
            data?.daysAvailable.findIndex((day) => {
              return day === Today(new Date());
            }) >= 0 ? (
              <TouchableOpacity
                style={styles.addToCartButton}
                onPress={() => addToUserCart(data?._id)}>
                <Icons
                  name="ios-add-outline"
                  size={16}
                  color={theme.WHITE_COLOR}
                />
              </TouchableOpacity>
            ) : (
              <View style={styles.naContainer}>
                <Text style={styles.naText}>N/A</Text>
              </View>
            )}
          </View>
        </View>
      ) : (
        <View style={styles.mainContainer}>
          <View style={styles.pastryImageContainer}>
            <Image
              source={
                data?.image
                  ? {uri: `${BASE_URL}/${data?.image[0]}`}
                  : require('../../../resources/images/vals-3.jpg')
              }
              imageStyle={styles.pastryImage}
              style={styles.pastryImage}
            />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.pastryDetails}>
              <Text style={styles.pastryName}>
                {data?.name?.substr(0, 20)}
                {data?.name?.length >= 20 && '...'}
              </Text>
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
            <View style={styles.pastryDetails}>
              <View style={styles.pastryStats}>
                <Text style={styles.pastryPrice}>{Thousand(data?.price)}</Text>
                <Text style={styles.currency}>XAF</Text>
              </View>
              {data?.discount !== 0 && (
                <View style={styles.bestDiscount}>
                  <Icons
                    name="ios-trending-down-outline"
                    size={16}
                    color={theme.WHITE_COLOR}
                  />
                  <Text style={styles.bestDiscountText}>{data?.discount}%</Text>
                </View>
              )}
            </View>
            <View style={styles.pastryDetails}>
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
                  color={theme.SECONDARY_COLOR}
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
                  color={theme.SECONDARY_COLOR}
                />
                <Text style={styles.pastryLikes}>{FormatUnits(dislikes)}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.likesContainer}
                onPress={() => addToFavourite(data?._id)}>
                <Icons
                  name={
                    favourites?.findIndex(
                      (p) => p.pastryId.toString() === data?._id.toString(),
                    ) >= 0
                      ? 'ios-heart-sharp'
                      : 'ios-heart-outline'
                  }
                  size={16}
                  color={theme.SECONDARY_COLOR}
                />
              </TouchableOpacity>
              {data?.isAvailable &&
              data?.daysAvailable.findIndex((day) => {
                return day === Today(new Date());
              }) >= 0 ? (
                <TouchableOpacity
                  style={styles.addToCartButton}
                  onPress={() => addToUserCart(data?._id)}>
                  <Icons
                    name="ios-add-outline"
                    size={16}
                    color={theme.WHITE_COLOR}
                  />
                </TouchableOpacity>
              ) : (
                <View style={styles.naContainer1}>
                  <Text style={styles.naText}>N/A</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      )}
      <Notification notify={notify} setNotify={setNotify} info={info} />
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(PastryCard);
