import React, {useState} from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {bindActionCreators} from 'redux';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';

import styles from './Cart.style';
import {CartCard, NavBar, Text} from '../../Components';
import theme from '../../../resources/Colors/theme';
import {ItemDetail} from '../../sections';
import {scrolling} from '../../redux/actions/ScrollActions';

const Cart = (props) => {
  const [info, setInfo] = useState(false);
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
            <Text style={styles.cartTitle}>My</Text>
            <Text style={styles.cartSubTitle}>Cart List</Text>
          </View>
          <CartCard setShow={setInfo} />
          <CartCard setShow={setInfo} />
          <CartCard setShow={setInfo} />
          <CartCard setShow={setInfo} />
          <CartCard setShow={setInfo} />
          <CartCard setShow={setInfo} />
          <CartCard setShow={setInfo} />
          <View style={styles.paymentContainer}>
            <Text style={styles.paymentTitle}>Payment Details</Text>
            <View style={styles.budgetContainer}>
              <Text style={styles.budgetTitle}>Subtotal</Text>
              <Text style={styles.budgetPrice}>XAF 50,000</Text>
            </View>
            <View style={styles.budgetContainer}>
              <Text style={styles.budgetTitle}>Delivery</Text>
              <Text style={styles.budgetPrice}>XAF 50,000</Text>
            </View>
            <View style={styles.budgetContainer}>
              <Text style={styles.budgetTitle}>Estimated Tax</Text>
              <Text style={styles.budgetPrice}>XAF 50,000</Text>
            </View>
            <View style={styles.horizontalLine} />
            <View style={styles.budgetContainer}>
              <Text style={styles.budgetTitleTotal}>Total</Text>
              <Text style={styles.budgetPriceTotal}>XAF 50,000</Text>
            </View>
            <LinearGradient
              style={styles.gradient}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              colors={[theme.SECONDARY_COLOR, theme.TERTIARY_COLOR]}>
              <TouchableOpacity style={styles.checkoutButton}>
                <Text style={styles.checkoutButtonText}>Checkout</Text>
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
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({scrolling}, dispatch);
};

export default connect(null, mapDispatchToProps)(Cart);
