import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Baker, BestBaker, NavBar, Notification} from '../../Components';
import styles from './Home.style';
import best from '../../../resources/Dummy/best.json';
import bakers from '../../../resources/Dummy/bakers.json';
import {setEntry, setChefs} from '../../redux/actions/AuthActions';
import theme from '../../../resources/Colors/theme';
import {BASE_URL} from '../../utils';

const Home = (props) => {
  const {i18n, firstTime, token} = props;
  const [notify, setNotify] = useState(false);
  const [info, setInfo] = useState({});
  const [chefs, setChefs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (firstTime) {
      setTimeout(() => {
        setNotify(true);
        setInfo({
          type: 'success',
          msg: i18n.t('phrases.welcomeBack') + ', ' + 'Jume Brice',
        });
      }, 100);
      props.setEntry();
    }
    setTimeout(() => {
      setNotify(false);
    }, 5000);
  }, [props, firstTime, i18n]);

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/bakersmob`, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${token}`,
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
          props.setChefs(response.bakers);
          setChefs(response.bakers);
        }

        if (statusCode === 500) {
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.unexpectedError'),
          });
          return false;
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

    return () => {
      setNotify(false);
      setInfo({});
    };
  }, [i18n, props, token]);

  const onRefresh = () => {
    props.setChefs([]);
    fetch(`${BASE_URL}/bakersmob`, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${token}`,
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
          props.setChefs(response.bakers);
          setChefs(response.bakers);
        }

        if (statusCode === 500) {
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.unexpectedError'),
          });
          return false;
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

  const render = () => {
    return (
      <View>
        <View style={styles.chefsContainer}>
          <Text style={styles.topChefText}>{i18n.t('phrases.topChefs')}</Text>
        </View>
        <FlatList
          horizontal={true}
          style={styles.listStyle}
          showsHorizontalScrollIndicator={false}
          data={chefs.slice(0, 5)}
          renderItem={({item, key}) => (
            <BestBaker
              data={item}
              onPress={() => Actions.shop({baker: item})}
              i18n={i18n}
            />
          )}
          keyExtractor={(item) => item._id.toString()}
          ListFooterComponent={() => <View style={styles.footerStyle} />}
        />
        <Text style={styles.chefText}>{i18n.t('phrases.ourChefs')}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar animated={true} backgroundColor={theme.PRIMARY_COLOR} />
      <NavBar screen="Home" search={true} />
      <FlatList
        ListHeaderComponent={render()}
        numColumns={2}
        data={chefs.length <= 5 ? chefs : chefs.slice(5)}
        columnWrapperStyle={styles.columnWrapperStyle}
        key={'flat'}
        renderItem={({item, index}) => (
          <Baker
            baker={item}
            onPress={() => Actions.shop({baker: item})}
            about="Ranking"
            i18n={i18n}
            rank={chefs.length <= 5 ? index + 1 : index + 5}
          />
        )}
        keyExtractor={(item) => item._id.toString()}
        refreshing={loading}
        onRefresh={() => onRefresh()}
      />
      <Notification notify={notify} setNotify={setNotify} info={info} />
    </SafeAreaView>
  );
};

const mapStateToProps = ({i18n, auth}) => {
  return {
    i18n: i18n.i18n,
    firstTime: auth.firstTime,
    user: auth.user,
    token: auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setEntry, setChefs}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
