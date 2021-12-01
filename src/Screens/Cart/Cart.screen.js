import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {bindActionCreators} from 'redux';

import styles from './Cart.style';
import {CartCard, NavBar, Text} from '../../Components';
import theme from '../../../resources/Colors/theme';
import LinearGradient from 'react-native-linear-gradient';
import {scrolling} from '../../redux/actions/ScrollActions';
import {connect} from 'react-redux';

const Cart = (props) => {
  const handle = (event) => {
    props.scrolling(true);
  };

  const hide = (event) => {
    props.scrolling(false);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <NavBar screen={'Cart'} search={false} />
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
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <View style={styles.paymentContainer}>
            <Text style={styles.paymentTitle}>Payment Details</Text>
            <View style={styles.budgetContainer}>
              <Text style={styles.budgetTitle}>Subtotal</Text>
              <Text style={styles.budgetPrice}>FCFA 50,000</Text>
            </View>
            <View style={styles.budgetContainer}>
              <Text style={styles.budgetTitle}>Delivery</Text>
              <Text style={styles.budgetPrice}>FCFA 50,000</Text>
            </View>
            <View style={styles.budgetContainer}>
              <Text style={styles.budgetTitle}>Estimated Tax</Text>
              <Text style={styles.budgetPrice}>FCFA 50,000</Text>
            </View>
            <View style={styles.horizontalLine} />
            <View style={styles.budgetContainer}>
              <Text style={styles.budgetTitleTotal}>Total</Text>
              <Text style={styles.budgetPriceTotal}>FCFA 50,000</Text>
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
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({scrolling}, dispatch);
};

export default connect(null, mapDispatchToProps)(Cart);
