import React, {useState, useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import styles from './Wallet.style';
import {Notification, Text} from '../../Components';
import theme from '../../../resources/Colors/theme';
import {AromaDetails} from '../../sections';
import {BASE_URL, KSeparator} from '../../utils';

const Wallet = (props) => {
  const {i18n, user} = props;
  const [details, setDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [wallet, setWallet] = useState({});
  const [info, setInfo] = useState({});
  const [notify, setNotify] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/user/getwallet/${user._id}`, {
      method: 'GET',
    })
      .then((res) => {
        const statusCode = res.status;
        const response = res.json();
        return Promise.all([statusCode, response]);
      })
      .then((res) => {
        const status = res[0];
        const response = res[1];

        if (status === 200) {
          setWallet(response?.wallet);
          setLoading(false);
        }

        if (status === 404) {
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.walletNotFound'),
          });
          return false;
        }

        if (status === 500) {
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
            type: '',
            msg: i18n.t('phrases.pleaseCheckInternet'),
          });
        }
      });
    // return () => {
    //   setWallet({});
    //   setLoading(false);
    //   setDetails(false);
    // };
  }, [user._id, i18n]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.idContainer}>
        <Image
          source={require('../../../resources/images/cups-5.jpg')}
          style={styles.idImage}
          imageStyle={styles.idImage}
        />
        <Text style={styles.idGreetings}>Hello,</Text>
        <Text style={styles.idName}> {user.name}</Text>
      </View>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <View style={styles.opTitle}>
          <Text style={styles.scrollTitle}>{i18n.t('phrases.myWallet')}</Text>
        </View>
        <LinearGradient
          style={styles.walletCard}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[
            theme.SECONESSS_COLOR,
            theme.TERTIARY_COLOR,
            theme.TERTIARY_COLOR,
            theme.SECONDARY_COLOR,
            // theme.TERTIARY_COLOR,
          ]}>
          <Text style={styles.walletText}>
            {i18n.t('phrases.totalBalance')}
          </Text>
          <View style={styles.infoContainer}>
            <Text style={styles.walletInfo}>
              {wallet && wallet?.amount && KSeparator(wallet?.amount)}
            </Text>
            <Text style={styles.walletCoin}> AC</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.walletEq}>Eq: </Text>
            <Text style={styles.walletCash}>
              {wallet && wallet?.amount && KSeparator(wallet?.amount)} XAF
            </Text>
          </View>
          <TouchableOpacity style={styles.topupButton}>
            <Icons name="ios-add-outline" size={16} color={theme.WHITE_COLOR} />
            <Text style={styles.topupText}>{i18n.t('phrases.topUp')}</Text>
          </TouchableOpacity>
        </LinearGradient>
        <View style={styles.opTitle}>
          <Text style={styles.scrollTitle}>{i18n.t('words.operations')}</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces>
          <TouchableOpacity
            style={styles.opContainer}
            activeOpacity={0.7}
            onPress={() => Actions.shop()}>
            <View style={styles.opCard}>
              <Icons
                name="ios-cart-outline"
                size={25}
                color={theme.PRIMARY_COLOR}
              />
            </View>
            <Text style={styles.opText}>{i18n.t('words.shop')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opContainer}>
            <View style={styles.opCard}>
              <Icons
                name="ios-swap-horizontal-outline"
                size={25}
                color={theme.PRIMARY_COLOR}
              />
            </View>
            <Text style={styles.opText}>{i18n.t('words.transfer')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opContainer}>
            <View style={styles.opCard}>
              <Icons
                name="ios-cash-outline"
                size={25}
                color={theme.PRIMARY_COLOR}
              />
            </View>
            <Text style={styles.opText}>{i18n.t('words.withdraw')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opContainer}>
            <View style={styles.opCard}>
              <Icon name="phone" size={25} color={theme.PRIMARY_COLOR} />
            </View>
            <Text style={styles.opText}>{i18n.t('words.airtime')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opContainer}>
            <View style={styles.opCard}>
              <Icons
                name="ios-warning-outline"
                size={25}
                color={theme.PRIMARY_COLOR}
              />
            </View>
            <Text style={styles.opText}>{i18n.t('phrases.setLimit')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.opContainer}
            onPress={() => setDetails(true)}>
            <View style={styles.opCard}>
              <Icons
                name="ios-information-outline"
                size={25}
                color={theme.PRIMARY_COLOR}
              />
            </View>
            <Text style={styles.opText}>{i18n.t('words.info')}</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.opTitle}>
          <Text style={styles.scrollTitle}>{i18n.t('words.transactions')}</Text>
        </View>
        <View style={styles.transactionContainer}>
          <View style={styles.transContainer}>
            <View style={styles.transIcon}>
              <Icon name="phone" size={20} color={theme.WHITE_COLOR} />
            </View>
            <View style={styles.transPurpose}>
              <Text style={styles.transTitle}>Airtime</Text>
              <Text style={styles.transDate}>08 Dec 2021</Text>
            </View>
            <View style={styles.transDebit}>
              <Text style={styles.transDebitText}>-500 AC</Text>
            </View>
          </View>
          <TransactionCard />
          <View style={styles.transContainer}>
            <View style={styles.transIcon}>
              <Icons
                name="ios-swap-horizontal-outline"
                size={20}
                color={theme.WHITE_COLOR}
              />
            </View>
            <View style={styles.transPurpose}>
              <Text style={styles.transTitle}>Transfer</Text>
              <Text style={styles.transDate}>08 Dec 2021</Text>
            </View>
            <View style={styles.transDebit}>
              <Text style={styles.transDebitText}>-10,000 AC</Text>
            </View>
          </View>
          <TransactionCard />
        </View>
      </ScrollView>
      <AromaDetails details={details} setDetails={setDetails} />
      <Notification info={info} notify={notify} setNotify={setNotify} />
    </SafeAreaView>
  );
};

const mapStateToProps = ({i18n, auth}) => {
  return {
    i18n: i18n.i18n,
    user: auth.user,
  };
};

export default connect(mapStateToProps)(Wallet);

// Transfer Top up setLimits withdraw help

const TransactionCard = (props) => {
  const {i18n} = props;
  return (
    <View style={styles.transContainer}>
      <View style={styles.transIcon}>
        <Icons name="ios-cart-outline" size={20} color={theme.WHITE_COLOR} />
      </View>
      <View style={styles.transPurpose}>
        <Text style={styles.transTitle}>Shopping</Text>
        <Text style={styles.transDate}>09 Dec 2021</Text>
      </View>
      <View style={styles.transDebit}>
        <Text style={styles.transDebitText}>-5,000 AC</Text>
      </View>
    </View>
  );
};
