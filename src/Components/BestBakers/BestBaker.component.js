import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import Icons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import theme from '../../../resources/Colors/theme.js';
import BASE_URL from '../../utils/globalVariable.js';
import {FormatUnits} from '../../utils';

import styles from './BestBaker.style.js';

const BestBaker = (props) => {
  const {data, onPress, i18n, user, token} = props;
  const [followers, setFollowers] = useState(0);
  const [notify, setNotify] = useState(false);
  const [info, setInfo] = useState({});
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const disLikeChef = (id) => {
    if (!user.hasOwnProperty('name')) {
      setInfo(true);
      setInfo({
        type: 'success',
        msg: `Please create your account to dislike ${data.companyName}`,
        title: 'Unsuccessful',
      });
      return false;
    }
    fetch(`${BASE_URL}/baker/dislike/${id}?user=${user._id}`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${token}`,
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
        const response = res[1].baker;

        if (statusCode === 200) {
          setLikes(response.likes.users.length);
          setDislikes(response.dislikes.users.length);
          props.setRefresh(true);
        }

        if (statusCode === 500) {
          console.log('error');
        }
      })
      .catch((err) => {
        if (err) {
          setInfo(true);
          setInfo({
            type: 'error',
            title: 'Unexpected Error',
            msg: 'Please check your internet connection.',
          });
        }
      });
  };

  const likeChef = (id) => {
    if (!user.hasOwnProperty('name')) {
      setInfo(true);
      setInfo({
        type: 'success',
        msg: `Please create your account to like ${data.companyName}`,
        title: 'Unsuccessful',
      });
      return false;
    }
    fetch(`${BASE_URL}/baker/like/${id}?user=${user._id}`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${token}`,
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
        const response = res[1].baker;
        if (statusCode === 200) {
          setLikes(response.likes.users.length);
          setDislikes(response.dislikes.users.length);
          props.setRefresh(true);
        }

        if (statusCode === 404) {
          console.log('response');
        }

        if (statusCode === 500) {
          console.log('error 500');
        }
      })
      .catch((err) => {
        if (err) {
          setInfo(true);
          setInfo({
            type: 'error',
            title: 'Unexpected Error',
            msg: 'Please check your internet connection.',
          });
        }
      });
  };

  const followChef = (id) => {
    console.log('posting');
    if (!user.hasOwnProperty('name')) {
      setInfo(true);
      setInfo({
        type: 'success',
        msg: `Please create your account to follow ${data.companyName}`,
        title: 'Unsuccessful',
      });
      return false;
    }
    fetch(`${BASE_URL}/baker/follow/${id}?user=${user._id}`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${token}`,
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
        const response = res[1].baker;
        if (statusCode === 200) {
          setFollowers(response.followers.users.length);
          props.setRefresh(true);
        }

        if (statusCode === 404) {
          console.log('response');
        }

        if (statusCode === 500) {
          console.log('error 500');
        }
      })
      .catch((err) => {
        console.log(err);
        setInfo(true);
        setInfo({
          type: 'error',
          title: 'Unexpected Error',
          msg: 'Please check your internet connection.',
        });
      });
  };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        imageStyle={styles.bestBackground}
        style={styles.bestBackground}
        source={
          data?.ceoImage
            ? {uri: BASE_URL + '/' + data?.ceoImage}
            : require('../../../resources/images/bds-14.jpg')
        }>
        <LinearGradient
          style={styles.bestContainer}
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}
          colors={[
            theme.PRIMARY_COLOR + '05',
            theme.PRIMARY_COLOR + '30',
            theme.PRIMARY_COLOR + 'cd',
          ]}>
          <View style={styles.bestInfo}>
            <View style={styles.companySign}>
              <Image
                source={
                  data?.companyImage
                    ? {uri: BASE_URL + '/' + data?.companyImage}
                    : require('../../../resources/images/favicon.png')
                }
                style={styles.logo}
              />
            </View>
            <TouchableOpacity
              style={styles.bestInfoButton}
              onPress={() => Actions.chefInfo({chef: data})}>
              <Icons
                name="ios-information-circle-outline"
                size={16}
                color={theme.SECONDARY_COLOR}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bestDetail}>
            <Text style={styles.chefRank}>
              {i18n.t('words.categories')}: {data?.categories.length}
            </Text>
            <Text style={styles.chefName}>{data?.name}</Text>
          </View>
          {data?.suspend && (
            <View style={styles.suspended}>
              <Text style={styles.suspendedText}>
                {i18n.t('words.suspended')}
              </Text>
            </View>
          )}
          <View style={styles.infoContainer}>
            <TouchableOpacity
              style={styles.likesContainer}
              onPress={() => likeChef(data?._id)}>
              <Icons
                name="ios-thumbs-up-outline"
                size={16}
                color={theme.WHITE_COLOR}
              />
              <Text style={styles.chefLikes}>{FormatUnits(likes)}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.likesContainer}
              onPress={() => disLikeChef(data?._id)}>
              <Icons
                name="ios-thumbs-down-outline"
                size={16}
                color={theme.WHITE_COLOR}
              />
              <Text style={styles.chefLikes}>{FormatUnits(dislikes)}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.likesContainer}
              onPress={() => followChef(data?._id)}>
              <Icons
                name="ios-person-add-outline"
                size={16}
                color={theme.WHITE_COLOR}
              />
              <Text style={styles.chefLikes}>{FormatUnits(followers)}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.shopSign}
              activeOpacity={1}
              onPress={() => onPress()}>
              <Icons
                name="ios-cart-outline"
                size={16}
                color={theme.SECONDARY_COLOR}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = ({auth}) => {
  return {
    user: auth.user,
    token: auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BestBaker);
