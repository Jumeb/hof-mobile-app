import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import theme from '../../../resources/Colors/theme';
import {BASE_URL} from '../../utils';
import styles from './BakerCard.style';

const Bakers = (props) => {
  const {baker, rank, onPress, i18n, user, token} = props;
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
        msg: `Please create your account to dislike ${baker.companyName}`,
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
        msg: `Please create your account to like ${baker.companyName}`,
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
        msg: `Please create your account to follow ${baker.companyName}`,
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
    <View style={styles.mainCard}>
      <View>
        <View style={styles.companyInfo}>
          <View style={styles.companyImageContainer}>
            <Image
              style={styles.companyImage}
              source={
                baker?.ceoImage
                  ? {uri: BASE_URL + '/' + baker?.ceoImage}
                  : require('../../../resources/images/vals-3.jpg')
              }
            />
            <View style={styles.chefInfo}>
              <View style={styles.companySign}>
                <Image
                  style={styles.companyLogo}
                  source={
                    baker?.companyImage
                      ? {uri: BASE_URL + '/' + baker?.companyImage}
                      : require('../../../resources/images/favicon.png')
                  }
                />
              </View>
              <TouchableOpacity
                style={styles.companyInfoButton}
                onPress={() => Actions.chefInfo({chef: baker})}>
                <Icons
                  name="ios-information-circle-outline"
                  size={16}
                  color={theme.WHITE_COLOR}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.rankContainer}>
              <Text style={styles.rankText}>
                {i18n.t('words.rank')}: {rank}
              </Text>
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
          </View>
          {baker?.suspend && (
            <View style={styles.suspended}>
              <Text style={styles.suspendedText}>
                {i18n.t('words.suspended')}
              </Text>
            </View>
          )}
        </View>
        <View style={styles.companyCredentials}>
          <Text style={styles.companyFounder}>{baker?.name}</Text>
          <Text style={styles.companyName}>
            {i18n.t('words.categories')}: {baker?.categories.length}
          </Text>
        </View>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Bakers);
