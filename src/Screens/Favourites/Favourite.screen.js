import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import styles from './Favourite.styles';
import {
  BestFavourite,
  DeleteModal,
  FavouriteCard,
  NavBar,
  Notification,
  Text,
} from '../../Components';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  addToFavourites,
  addLikes,
  addDislikes,
} from '../../redux/actions/FavouritesActions';
import {BASE_URL, Search, SearchPop, Storage} from '../../utils';
import {ItemDetail} from '../../sections';

const Favourite = (props) => {
  const {i18n, user, addToFavourites, _favourites} = props;
  const [info, setInfo] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [notify, setNotify] = useState(false);
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [_delete, setDelete] = useState({});
  const [favourites, setFavourites] = useState([]);
  const [isItem, setIsItem] = useState(false);
  const [_item, setItem] = useState({});
  const [text, setText] = useState('');
  const [sorry, setSorry] = useState(false);
  const [icon, setIcon] = useState(
    require('../../../resources/images/favicon-1.png'),
  );

  useEffect(() => {
    const favicon = [
      {
        key: 'en',
        image: require('../../../resources/images/favicon-1.png'),
      },
      {
        key: 'fr',
        image: require('../../../resources/images/favicon-fr.png'),
      },
      {
        key: 'de',
        image: require('../../../resources/images/favicon-de.png'),
      },
    ];
    setIcon(favicon.filter((i) => i?.key === i18n?.locale)[0]?.image);
    // return () => {
    //   setIcon(require('../../../resources/images/favicon-1.png'));
    // };
  }, [i18n]);

  useEffect(() => {
    setLoading(true);
    if (!user.hasOwnProperty('name')) {
      setLoading(false);
      setNotify(true);
      setInfo({
        type: 'success',
        msg: i18n.t('phrases.pleaseGetAnAccount'),
      });
      return false;
    }
    fetch(`${BASE_URL}/user/getfavourite/${user._id}`, {
      method: 'GET',
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
          setFavourites(response?.user?.favourites?.pastries);
        }

        if (statusCode === 404) {
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.couldNotGetFavourites'),
          });
        }

        if (statusCode === 500) {
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.unexpectedError'),
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

    // return () => {
    //   setLoading(false);
    //   setNotify(false);
    //   setInfo({});
    // };
  }, [user, i18n, addToFavourites, _favourites]);

  const Remove = (data) => {
    setLoading(true);
    fetch(
      `${BASE_URL}/user/removeFromFavourite/${data?.pastryId?._id}?user=${user._id}`,
      {
        method: 'POST',
      },
    )
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
          props.addToFavourites(response?.user?.favourites);
          setIsDelete(false);
          setNotify(true);
          setInfo({
            type: 'success',
            msg:
              data?.pastryId?.name +
              ' ' +
              i18n.t('phrases.removedFromFavourites'),
          });
        }
        if (statusCode === 422) {
          setIsDelete(false);
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.couldNotRemoveFromFavourites'),
          });
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          setIsDelete(false);
          setLoading(false);
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.pleaseCheckInternet'),
          });
        }
      });
  };

  const onRefresh = () => {
    setLoading(true);
    if (!user.hasOwnProperty('name')) {
      setLoading(false);
      setNotify(true);
      setInfo({
        type: 'success',
        msg: i18n.t('phrases.pleaseGetAnAccount'),
      });
      return false;
    }
    fetch(`${BASE_URL}/user/getfavourite/${user._id}`, {
      method: 'GET',
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
          // console.log(response?.user?.favourites?.pastries, 'hellind');
          setFavourites(response?.user?.favourites?.pastries);
          addToFavourites(response?.user?.favourites);
        }

        if (statusCode === 404) {
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.couldNotGetFavourites'),
          });
        }

        if (statusCode === 500) {
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.unexpectedError'),
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

  useEffect(() => {
    SearchPop(text, _favourites, setFavourites, 'name', 'pastryId');
  }, [text, _favourites]);

  const renderHeader = () => {
    return (
      <View>
        <View>
          <View style={styles.pastriesContainer}>
            <Text style={styles.topPastries}>
              {i18n.t('phrases.topFavourites')}
            </Text>
          </View>
          <FlatList
            horizontal={true}
            style={styles.listStyle}
            showsHorizontalScrollIndicator={false}
            data={favourites.slice(0, 5)}
            renderItem={({item, key}) => (
              <BestFavourite
                item={item}
                onPress={() => Actions.pastryInfo()}
                setItem={setItem}
                setIsItem={setIsItem}
                setDelete={setDelete}
                setIsDelete={setIsDelete}
                i18n={i18n}
              />
            )}
            keyExtractor={(item) => item._id.toString()}
            ListFooterComponent={() => <View style={styles.footerStyle} />}
          />
        </View>
        <Text style={styles.varietyText}>{i18n.t('phrases.myFavourites')}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <NavBar
        screen="favourite"
        pop={true}
        right={true}
        search={true}
        text={text}
        setText={setText}
      />
      {!sorry ? (
        favourites.length === 0 && text.length > 0 && !loading ? (
          <View style={styles.sorryContainer}>
            <TouchableOpacity onPress={() => onRefresh()}>
              <Image source={icon} style={styles.sorryImage} />
              <Text style={styles.sorryText}>
                {i18n.t('phrases.noFavouriteFound')}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            ListHeaderComponent={
              text.length === 0 ? (
                renderHeader()
              ) : (
                <View style={styles.pastriesContainer}>
                  <Text style={styles.varietyText}>
                    {i18n.t('phrases.searchResults')}
                  </Text>
                </View>
              )
            }
            horizontal={false}
            numColumns={1}
            data={favourites.length <= 5 ? favourites : favourites.slice(5)}
            renderItem={({item, key}) => (
              <FavouriteCard
                key={key}
                item={item}
                onPress={() => Actions.pastryInfo()}
                setItem={setItem}
                setIsItem={setIsItem}
                i18n={i18n}
                setDelete={setDelete}
                setIsDelete={setIsDelete}
              />
            )}
            keyExtractor={(item) => item._id.toString()}
            showsVerticalScrollIndicator={false}
            key={'flat'}
            refreshing={loading}
            onRefresh={() => onRefresh()}
          />
        )
      ) : (
        <View style={styles.sorryContainer}>
          <TouchableOpacity onPress={() => onRefresh()}>
            <Image source={icon} style={styles.sorryImage} />
            <Text style={styles.sorryText}>
              {i18n.t('phrases.couldNotLoadFavourites')}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <ItemDetail info={isItem} setInfo={setIsItem} item={_item} />
      <DeleteModal
        _delete={_delete}
        setDelete={setDelete}
        setIsDelete={setIsDelete}
        isDelete={isDelete}
        onPress={(data) => Remove(data)}
        location={'favourites'}
      />
      <Notification notify={notify} setNotify={setNotify} info={info} />
    </SafeAreaView>
  );
};

const mapStateToProps = ({i18n, auth, favourites}) => {
  return {
    i18n: i18n.i18n,
    user: auth.user,
    _favourites: favourites.favourites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addToFavourites, addLikes, addDislikes}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
