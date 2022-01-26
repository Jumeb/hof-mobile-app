import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {bindActionCreators} from 'redux';
import Icons from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

import styles from './PastryInfo.style';
import {scrolling} from '../../redux/actions/ScrollActions';
import {
  GradientButton,
  NavBar,
  Notification,
  RateButton,
  Text,
} from '../../Components';
import theme from '../../../resources/Colors/theme';
import Thousand from '../../utils/kSeparator';
import {BASE_URL} from '../../utils';
import {addToCart} from '../../redux/actions/CartAction';
import {addToFavourites} from '../../redux/actions/FavouritesActions';
import {Today} from '../../utils/date';

const PastryInfo = (props) => {
  const {i18n, data, user, cart, addToFavourites} = props;
  const [notify, setNotify] = useState(false);
  const [msg, setMsg] = useState('');
  const [images, setImages] = useState([]);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [qty, setQty] = useState(0);
  const [dislikes, setDislikes] = useState(data.dislikes.users.length);
  const [likes, setLikes] = useState(data.likes.users.length);

  useEffect(() => {
    setQty(
      cart?.pastries.filter(
        (items) => items?.pastryId?._id.toString() === data?._id.toString(),
      ).length > 0
        ? cart?.pastries.filter(
            (items) => items?.pastryId?._id.toString() === data?._id.toString(),
          )[0].quantity
        : 0,
    );
  }, [cart, data?._id]);

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
          setQty(qty + 1);
          if (qty === 0) {
            setNotify(true);
            setInfo({
              type: 'success',
              msg: `${data?.name} added to cart`,
            });
          }
        }

        if (statusCode === 422) {
          setNotify(true);
          setInfo({
            type: 'error',
            msg: `${data?.name} not added to cart.`,
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

  useEffect(() => {
    let _images = [];
    _images = data?.image;
    setImages(_images);
  }, [data?.image]);

  const AddToCart = () => {
    setNotify(true);
    setInfo({
      type: 'success',
      msg: i18n.t('phrases.addedToCart'),
    });
    setTimeout(() => {
      Actions.cart();
    }, 1500);
  };

  const addToFavourite = () => {
    setLoading(true);
    if (!user?.hasOwnProperty('name')) {
      setNotify(true);
      setInfo({
        type: 'success',
        msg: i18n.t('phrases.createAccountToAdd') + ' ' + data?.name + '.',
      });
      return false;
    }
    fetch(`${BASE_URL}/user/addToFavourite/${data?._id}?userId=${user._id}`, {
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

  return (
    <SafeAreaView style={styles.mainContainer}>
      <NavBar
        screen="pastryInfo"
        pop={true}
        data={data}
        action={addToFavourite}
      />
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        <SwiperFlatList autoplay autoplayDelay={10} autoplayLoop>
          {images &&
            images.length >= 1 &&
            images.map((d, key) => {
              return (
                <Header
                  data={d}
                  index={key + 1}
                  length={images.length}
                  key={key}
                />
              );
            })}
        </SwiperFlatList>
        <View style={styles.infoContainer}>
          <Text style={styles.categoryName}>
            {data?.type} {i18n.t('words.by')} {data?.creatorId?.name}
          </Text>
          <View style={styles.detailContainer}>
            <Text style={styles.pastryName}>{data?.name}</Text>
            <Text style={styles.pastryPrice}>{Thousand(data?.price)} XAF</Text>
          </View>
          <Text style={styles.aboutTitle}>{i18n.t('words.description')}</Text>
          <Text style={styles.aboutText}>{data?.description}</Text>
          <Text style={styles.aboutTitle}>
            {i18n.t('phrases.requiredDays')}
          </Text>
          <Text style={styles.aboutText}>
            {i18n.t('phrases.aMinimumOf')}{' '}
            <Text style={styles.date}>{data?.daysRequired}</Text>{' '}
            {i18n.t('phrases.daysIsRequiredForDelivery')}
          </Text>
          <Text style={styles.aboutTitle}>
            {data?.daysAvailable && data?.daysAvailable.length > 1
              ? i18n.t('phrases.availableDays')
              : i18n.t('phrases.availableDay')}
          </Text>
          <View style={styles.dayContainer}>
            {data?.daysAvailable &&
              data?.daysAvailable.map((day, index) => (
                <Text key={index} style={styles.aboutText}>
                  {day}
                  {', '}
                </Text>
              ))}
          </View>
          <Text style={styles.aboutTitle}>{i18n.t('words.stats')}</Text>
          <View style={styles.rateContainer}>
            <RateButton
              title={likes}
              icon={
                data &&
                data?.likes?.users?.findIndex(
                  (p) => p.userId?.toString() === user?._id.toString(),
                ) >= 0
                  ? 'ios-thumbs-up-sharp'
                  : 'ios-thumbs-up-outline'
              }
              onPress={() => likeItem(data?._id)}
            />
            <RateButton
              title={dislikes}
              icon={
                data &&
                data?.dislikes?.users?.findIndex(
                  (p) => p.userId?.toString() === user?._id.toString(),
                ) >= 0
                  ? 'ios-thumbs-down-sharp'
                  : 'ios-thumbs-down-outline'
              }
              onPress={() => disLikeItem(data?._id)}
            />
          </View>
        </View>
        <View style={styles.controlsContainer}>
          <View style={styles.qtyContainer}>
            <Text style={styles.accumelatedPrice}>
              {data?.discount > 0
                ? Thousand(
                    qty >= 1
                      ? ((100 - data?.discount) / 100) * qty * data?.price
                      : 0,
                  )
                : Thousand(qty >= 1 ? qty * data?.price : 0)}{' '}
              XAF
            </Text>
            {data?.isAvailable &&
            data?.daysAvailable.findIndex((day) => {
              return day === Today(new Date());
            }) >= 0 ? (
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={() => subFromCart(data?._id)}>
                  <Icons
                    name="ios-remove-outline"
                    size={16}
                    color={theme.WHITE_COLOR}
                  />
                </TouchableOpacity>
                <Text style={styles.qtyText}>{qty}</Text>
                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={() => addToUserCart(data?._id)}>
                  <Icons
                    name="ios-add-outline"
                    size={16}
                    color={theme.WHITE_COLOR}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.naContainer}>
                <Text style={styles.naText}>
                  {i18n.t('phrases.notAvailable')}
                </Text>
              </View>
            )}
          </View>
          {data?.isAvailable &&
            data?.daysAvailable.findIndex((day) => {
              return day === Today(new Date());
            }) >= 0 && (
              <GradientButton
                title={i18n.t('phrases.addToCart')}
                onPress={() => AddToCart()}
              />
            )}
          <Text style={styles.pastryName}>{i18n.t('words.recipe')}</Text>
          <Text style={styles.aboutText}>
            {data?.recipe && data?.recipe.length > 1
              ? data?.recipe
              : i18n.t('phrases.notAvailable')}
          </Text>
        </View>
      </ScrollView>
      <Notification notify={notify} setNotify={setNotify} info={info} />
    </SafeAreaView>
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
  return bindActionCreators({scrolling, addToFavourites, addToCart}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PastryInfo);

const Header = (props) => {
  const {length, index, data} = props;
  return (
    <View style={styles.pastryContainer}>
      <Image
        source={
          data
            ? {uri: `${BASE_URL}/${data}`}
            : require('../../../resources/images/bds-7.jpg')
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
