import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {bindActionCreators} from 'redux';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import styles from './Cart.style';
import {
  CartCard,
  DeleteModal,
  NavBar,
  Notification,
  Text,
} from '../../Components';
import theme from '../../../resources/Colors/theme';
import {ItemDetail} from '../../sections';
import {scrolling} from '../../redux/actions/ScrollActions';
import {BASE_URL, KSeparator, SearchObj, Storage} from '../../utils';
import {addToCart, addCartObj} from '../../redux/actions/CartAction';
import {addToFavourites} from '../../redux/actions/FavouritesActions';

const Cart = (props) => {
  const {i18n, user, cart, cartObj, addCartObj} = props;
  const [msg, setMsg] = useState('');
  const [isDelete, setIsDelete] = useState(false);
  const [_delete, setDelete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [_user, setUser] = useState([]);
  const [info, setInfo] = useState({});
  const [notify, setNotify] = useState(false);
  const [_cart, setCart] = useState({});
  const [isItem, setIsItem] = useState(false);
  const [text, setText] = useState('');
  const [_item, setItem] = useState({});

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
    fetch(`${BASE_URL}/user/getcart/${user._id}`, {
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
          setUser(response.user);
          setCart(response.bakers);
          addCartObj(response.bakers);
        }

        if (statusCode === 404) {
          setNotify(true);
          setInfo({
            type: 'error',
            title: 'Unexpected Error',
            msg: response.msg,
          });
        }

        if (statusCode === 500) {
          setNotify(true);
          setInfo({
            type: 'error',
            title: 'Unexpected Error',
            msg: response.msg,
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

    return () => {
      setLoading(false);
      // setUser([]);
      setNotify(false);
      setInfo({});
      // setCart({});
    };
  }, [user, i18n, cart, addCartObj]);

  const Trash = (data) => {
    setLoading(true);
    fetch(
      `${BASE_URL}/user/removeFromCart/${data?.pastryId?._id}?user=${user._id}`,
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
          props.addToCart(response?.user?.cart);
          props.addToFavourites(response?.user?.favourites);
          Storage.storeInfo('FAVOURITES', response?.user?.favourites);
          setIsDelete(false);
          setNotify(true);
          setInfo({
            type: 'success',
            msg: data?.pastryId?.name + ' ' + i18n.t('phrases.removedFromCart'),
          });
        }
        if (statusCode === 422) {
          setIsDelete(false);
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.couldNotRemoveFromCart'),
          });
        }
      })
      .catch((err) => {
        if (err) {
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

  useEffect(() => {
    SearchObj(text, cartObj, setCart, 'name');
  }, [text, cartObj]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <NavBar
        screen={'Cart'}
        pop={true}
        right={true}
        search={true}
        text={text}
        setText={setText}
      />
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        {loading && _user.length === 0 ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={'large'} color={theme.TERTIARY_COLOR} />
          </View>
        ) : (
          <View style={styles.cartContainer}>
            <View style={styles.cartTitleContainer}>
              <Text style={styles.cartTitle}>{i18n.t('words.my')}</Text>
              <Text style={styles.cartSubTitle}>
                {i18n.t('phrases.cartList')}
              </Text>
            </View>
            {Object.keys(_cart)[0] ? (
              Object.values(_cart).map((items, ind) => (
                <View key={ind}>
                  <Text style={styles.chefTitle}>
                    {i18n.t('words.chef')}: {Object.keys(_cart)[ind]}{' '}
                  </Text>
                  {items.map((item, index) => (
                    <CartCard
                      item={item}
                      key={index}
                      setItem={setItem}
                      setIsItem={setIsItem}
                      setDelete={setDelete}
                      setIsDelete={setIsDelete}
                    />
                  ))}
                  <View style={styles.paymentContainer}>
                    <Text style={styles.paymentTitle}>
                      {i18n.t('phrases.paymentDetails')}
                    </Text>
                    {cart.length > 0 &&
                      _user.find(
                        (d) =>
                          d?.pastryId?.creatorId?.companyName ===
                          `${Object.keys(_cart)[ind]}`,
                      ).pastryId.creatorId.suspend && (
                        <Text style={styles.suspended}>
                          {i18n.t('phrases.suspendedOrderAt')}
                        </Text>
                      )}
                    <View style={styles.budgetContainer}>
                      <Text style={styles.budgetTitle}>
                        {i18n.t('words.subtotal')}
                      </Text>
                      <Text style={styles.budgetPrice}>
                        {KSeparator(
                          Object.values(_cart)[ind].reduce(
                            (sum, item) =>
                              sum +
                              (item.pastryId.discount
                                ? ((100 - item.pastryId.discount) / 100) *
                                  item.pastryId.price *
                                  item.quantity
                                : item.pastryId.price * item.quantity),
                            0,
                          ),
                        )}{' '}
                        XAF
                      </Text>
                    </View>
                    {/* <View style={styles.budgetContainer}>
                    <Text style={styles.budgetTitle}>
                      {i18n.t('words.delivery')}
                    </Text>
                    <Text style={styles.budgetPrice}>
                      XAF {KSeparator(50000)}
                    </Text>
                  </View> */}
                    <View style={styles.budgetContainer}>
                      <Text style={styles.budgetTitle}>
                        {i18n.t('phrases.platformTax')}
                      </Text>
                      <Text style={styles.budgetPrice}>
                        XAF {KSeparator(0)}
                      </Text>
                    </View>
                    <View style={styles.horizontalLine} />
                    <View style={styles.budgetContainer}>
                      <Text style={styles.budgetTitleTotal}>
                        {i18n.t('words.total')}
                      </Text>
                      <Text style={styles.budgetPriceTotal}>
                        {KSeparator(
                          Object.values(_cart)[ind].reduce(
                            (sum, item) =>
                              sum +
                              (item.pastryId.discount
                                ? ((100 - item.pastryId.discount) / 100) *
                                  item.pastryId.price *
                                  item.quantity
                                : item.pastryId.price * item.quantity),
                            0,
                          ),
                        )}{' '}
                        XAF
                      </Text>
                    </View>
                    <LinearGradient
                      style={styles.gradient}
                      start={{x: 0, y: 1}}
                      end={{x: 1, y: 1}}
                      colors={[theme.SECONDARY_COLOR, theme.TERTIARY_COLOR]}>
                      <TouchableOpacity
                        style={styles.checkoutButton}
                        onPress={() => Actions.checkout()}>
                        <Text style={styles.checkoutButtonText}>
                          {i18n.t('words.checkout')}
                        </Text>
                        <Icons
                          name="ios-arrow-forward-outline"
                          size={16}
                          color={theme.WHITE_COLOR}
                        />
                      </TouchableOpacity>
                    </LinearGradient>
                  </View>
                </View>
              ))
            ) : (
              <View>
                <Text>{i18n.t('phrases.couldNotLoadCart')}</Text>
              </View>
            )}
          </View>
        )}
      </ScrollView>
      <ItemDetail info={isItem} setInfo={setIsItem} item={_item} />
      <DeleteModal
        _delete={_delete}
        setDelete={setDelete}
        setIsDelete={setIsDelete}
        isDelete={isDelete}
        onPress={(data) => Trash(data)}
        location={'cart'}
      />
      <Notification notify={notify} setNotify={setNotify} info={info} />
    </SafeAreaView>
  );
};

const mapStateToProps = ({i18n, auth, cart}) => {
  return {
    i18n: i18n.i18n,
    user: auth.user,
    cart: cart.cart,
    cartObj: cart.cartObj,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {scrolling, addToCart, addToFavourites, addCartObj},
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
