import React, {useEffect, useState} from 'react';
import {
  Platform,
  UIManager,
  LayoutAnimation,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CreditCardInput} from 'react-native-credit-card-input';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icons from 'react-native-vector-icons/Ionicons';

import theme from '../../../resources/Colors/theme';
import {NavBar, OrderDetailsCard, Text} from '../../Components';
import best from '../../../resources/Dummy/best.json';
import Thousand from '../../utils/kSeparator';
import styles from './Checkout.style';
import {Card, ItemsDetail, Location, Momo} from '../../sections';
import {BASE_URL, KSeparator} from '../../utils';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Checkout = (props) => {
  const {i18n, cart, user, token, order} = props;
  const [itemDet, setItemDet] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [isAddress, setIsAddress] = useState(false);
  const [address, setAddress] = useState({});
  const [isMomo, setIsMomo] = useState(false);
  const [momo, setMomo] = useState('');
  const [isCard, setIsCard] = useState(false);
  const [card, setCard] = useState({});
  const [isPay, setIsPay] = useState(false);
  const [pay, setPay] = useState('');
  const [loading, setLoading] = useState(false);
  const [notify, setNotify] = useState(false);
  const [info, setInfo] = useState({});

  const animatedHeight = {
    height: showAddress ? 180 : 0,
    opacity: showAddress ? 1 : 0,
  };

  LayoutAnimation.configureNext(
    LayoutAnimation.create(
      500,
      LayoutAnimation.Types.linear,
      LayoutAnimation.Properties.opacity,
    ),
  );

  const SetCard = () => {
    setIsCard(true);
    setIsMomo(false);
  };

  const Order = (creatorId) => {
    fetch(`${BASE_URL}/create/order/${user._id}?baker=${creatorId}`, {
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
        const response = res[1];
        setLoading(false);

        if (statusCode === 200) {
          setNotify(true);
          setInfo({
            type: 'success',
            msg: 'Successfully placed your order',
          });
          setTimeout(() => {
            props.setRefresh(true);
          }, 2000);
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
    <SafeAreaView style={styles.mainContainer}>
      <NavBar
        screen="checkout"
        pop={true}
        cartNumber={cart?.pastries ? cart?.pastries.length : 0}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.editProfileContainer}>
          <Text style={styles.editProfile}>{i18n.t('words.checkout')}</Text>
        </View>
        <Text style={styles.title}>{i18n.t('words.order')}</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={order}
          numColumns={1}
          key={'flat'}
          renderItem={({item, key}) => (
            <OrderDetailsCard key={key} item={item} i18n={i18n} />
          )}
          keyExtractor={(item) => item._id.toString()}
        />
        <View style={styles.addressContainer}>
          <TouchableOpacity
            style={styles.addressButton}
            onPress={() => setIsAddress(true)}>
            <Text style={styles.addressButtonText}>
              {i18n.t('phrases.shippingAddress')}
            </Text>
            {!showAddress && (
              <Icons
                name="ios-chevron-forward-outline"
                size={16}
                color={theme.PRIMARY_COLOR}
              />
            )}
          </TouchableOpacity>
          <View style={[styles.loadingContainer, animatedHeight]}>
            <Text style={styles.isAddress}>Buea</Text>
            <Text style={styles.loadingLang}>
              St Peter and Paul Catholic church
            </Text>
          </View>
        </View>
        <Text style={styles.subTitle}>{i18n.t('phrases.paymentMethod')}</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces>
          <TouchableOpacity style={styles.opContainer} activeOpacity={0.7}>
            <View style={styles.opCard}>
              <Icons
                name="ios-cart-outline"
                size={25}
                color={theme.PRIMARY_COLOR}
              />
              <Text style={styles.opText}>Aroma Coins</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.opContainer}
            onPress={() => setIsMomo(true)}>
            <View style={styles.opCard}>
              <Icons
                name="ios-swap-horizontal-outline"
                size={25}
                color={theme.PRIMARY_COLOR}
              />
              <Text style={styles.opText}>Mobile Money</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.opContainer}
            onPress={() => SetCard()}>
            <View style={styles.opCard}>
              <Icons
                name="ios-warning-outline"
                size={25}
                color={theme.PRIMARY_COLOR}
              />
              <Text style={styles.opText}>CARD</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opContainer}>
            <View style={styles.opCard}>
              <Icon name="phone" size={25} color={theme.PRIMARY_COLOR} />
              <Text style={styles.opText}>PayPal</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opContainer}>
            <View style={styles.opCard}>
              <Icons
                name="ios-information-outline"
                size={25}
                color={theme.PRIMARY_COLOR}
              />
              <Text style={styles.opText}>
                {i18n.t('phrases.cashOnDelivery')}
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.paymentContainer}>
          <Text style={styles.paymentTitle}>
            {i18n.t('phrases.paymentDetails')}
          </Text>
          <View style={styles.budgetContainer}>
            <Text style={styles.budgetTitle}>{i18n.t('words.subtotal')}</Text>
            <Text style={styles.budgetPrice}>
              {KSeparator(
                order.reduce(
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
              XAF{' '}
            </Text>
          </View>
          <View style={styles.budgetContainer}>
            <Text style={styles.budgetTitle}>{i18n.t('words.delivery')}</Text>
            <Text style={styles.budgetPrice}>XAF {Thousand(50000)}</Text>
          </View>
          <View style={styles.budgetContainer}>
            <Text style={styles.budgetTitle}>
              {i18n.t('phrases.platformTax')}
            </Text>
            <Text style={styles.budgetPrice}>XAF {KSeparator(0)}</Text>
          </View>
          <View style={styles.horizontalLine} />
          <View style={styles.budgetContainer}>
            <Text style={styles.budgetTitleTotal}>{i18n.t('words.total')}</Text>
            <Text style={styles.budgetPriceTotal}>
              {KSeparator(
                order.reduce(
                  (sum, item) =>
                    sum +
                    (item.pastryId.discount
                      ? ((100 - item.pastryId.discount) / 100) *
                        item.pastryId.price *
                        item.quantity
                      : item.pastryId.price * item.quantity),
                  Number(address.deliveryFee),
                ),
              )}
              XAF{' '}
            </Text>
          </View>
          <LinearGradient
            style={styles.gradient}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            colors={[theme.SECONDARY_COLOR, theme.TERTIARY_COLOR]}>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutButtonText}>
                {i18n.t('words.confirm')}
              </Text>
              <Icons
                name="ios-arrow-forward-outline"
                size={16}
                color={theme.WHITE_COLOR}
              />
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
      <ItemsDetail info={itemDet} setInfo={setItemDet} />
      <Card
        isCard={isCard}
        setIsCard={setIsCard}
        setCard={setCard}
        i18n={i18n}
      />
      <Momo
        isMomo={isMomo}
        setIsMomo={setIsMomo}
        setMomo={setMomo}
        momo={momo}
        i18n={i18n}
      />
      <Location isAddress={isAddress} setIsAddress={setIsAddress} i18n={i18n} />
    </SafeAreaView>
  );
};

const mapStateToProps = ({i18n, cart, auth}) => {
  return {
    i18n: i18n.i18n,
    cart: cart.cart,
    user: auth.user,
    token: auth.token,
  };
};
export default connect(mapStateToProps)(Checkout);
