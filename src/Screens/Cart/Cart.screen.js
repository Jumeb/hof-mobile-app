import React, {useState} from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {bindActionCreators} from 'redux';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';

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
import Thousand from '../../utils/kSeparator';

const Cart = (props) => {
  const {i18n} = props;
  const [info, setInfo] = useState(false);
  const [notify, setNotify] = useState(false);
  const [msg, setMsg] = useState('');
  const [_delete, setDelete] = useState(false);

  const SetInfo = () => {
    setInfo(true);
  };

  const SetDelete = () => {
    setMsg(i18n.t('phrases.removedFromCart'));
    setDelete(true);
  };

  const handle = (event) => {
    props.scrolling(true);
  };

  const hide = (event) => {
    props.scrolling(false);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <NavBar screen={'Cart'} pop={true} right={true} search={true} />
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        onScrollBeginDrag={(event) => handle(event)}
        onScrollEndDrag={(event) => hide(event)}>
        <View style={styles.cartContainer}>
          <View style={styles.cartTitleContainer}>
            <Text style={styles.cartTitle}>{i18n.t('words.my')}</Text>
            <Text style={styles.cartSubTitle}>
              {i18n.t('phrases.cartList')}
            </Text>
          </View>
          <CartCard setInfo={SetInfo} setDelete={SetDelete} />
          <CartCard setInfo={SetInfo} setDelete={SetDelete} />
          <CartCard setInfo={SetInfo} setDelete={SetDelete} />
          <CartCard setInfo={SetInfo} setDelete={SetDelete} />
          <CartCard setInfo={SetInfo} setDelete={SetDelete} />
          <CartCard setInfo={SetInfo} setDelete={SetDelete} />
          <CartCard setInfo={SetInfo} setDelete={SetDelete} />
          <View style={styles.paymentContainer}>
            <Text style={styles.paymentTitle}>
              {i18n.t('phrases.paymentDetails')}
            </Text>
            <View style={styles.budgetContainer}>
              <Text style={styles.budgetTitle}>{i18n.t('words.subtotal')}</Text>
              <Text style={styles.budgetPrice}>XAF {Thousand(50000)}</Text>
            </View>
            <View style={styles.budgetContainer}>
              <Text style={styles.budgetTitle}>{i18n.t('words.delivery')}</Text>
              <Text style={styles.budgetPrice}>XAF {Thousand(50000)}</Text>
            </View>
            <View style={styles.budgetContainer}>
              <Text style={styles.budgetTitle}>
                {i18n.t('phrases.estimatedTax')}
              </Text>
              <Text style={styles.budgetPrice}>XAF {Thousand(50000)}</Text>
            </View>
            <View style={styles.horizontalLine} />
            <View style={styles.budgetContainer}>
              <Text style={styles.budgetTitleTotal}>
                {i18n.t('words.total')}
              </Text>
              <Text style={styles.budgetPriceTotal}>XAF {Thousand(50000)}</Text>
            </View>
            <LinearGradient
              style={styles.gradient}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              colors={[theme.SECONDARY_COLOR, theme.TERTIARY_COLOR]}>
              <TouchableOpacity style={styles.checkoutButton}>
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
      </ScrollView>
      <ItemDetail info={info} setInfo={setInfo} />
      <DeleteModal
        _delete={_delete}
        setDelete={setDelete}
        setNotify={setNotify}
        location={'cart'}
      />
      <Notification
        notify={notify}
        setNotify={setNotify}
        msg={msg}
        type={'success'}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = ({i18n}) => {
  return {
    i18n: i18n.i18n,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({scrolling}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
