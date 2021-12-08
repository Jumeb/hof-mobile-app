import React from 'react';
import {FlatList, SafeAreaView, ScrollView, View} from 'react-native';

import styles from './OrderDetails.style';
import {NavBar, OrderDetailsCard, Text} from '../../Components';
import best from '../../../resources/Dummy/best.json';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../../resources/Colors/theme';
import Icons from 'react-native-vector-icons/Ionicons';

const OrderDetails = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <NavBar screen="orderDetails" right={true} pop={true} />
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        <View style={styles.orderContainer}>
          <Text style={styles.orderTitle}>Order Details</Text>
        </View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={best}
          numColumns={1}
          key={'flat'}
          renderItem={({item, key}) => <OrderDetailsCard key={key} />}
          keyExtractor={(item) => item.id.toString()}
        />
        <View style={styles.paymentContainer}>
          <Text style={styles.orderId}>Order #03973492</Text>
          <View style={styles.budgetContainer}>
            <Text style={styles.budgetTitle}>SubTotal</Text>
            <Text style={styles.budgetPrice}>XAF 250,000</Text>
          </View>
          <View style={styles.budgetContainer}>
            <Text style={styles.budgetTitle}>SubTotal</Text>
            <Text style={styles.budgetPrice}>XAF 250,000</Text>
          </View>
          <View style={styles.horizontalLine} />
          <View style={styles.budgetContainer}>
            <Text style={styles.budgetTitleTotal}>Total</Text>
            <Text style={styles.budgetPriceTotal}>XAF 250,000</Text>
          </View>
          <View style={styles.horizontal} />
          <View style={styles.statusContainer}>
            <Text style={styles.orderSubTitle}>Order status</Text>
            <View style={styles.progressBar}>
              <LinearGradient
                style={styles.gradient}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={[
                  theme.PRIMARY_COLOR,
                  theme.SECONDARY_COLOR,
                  theme.SUCCESS_COLOR,
                ]}
              />
              <View style={styles.checkMarkContainer}>
                <View style={[styles.checkMark, styles.firstMark]}>
                  <Icons
                    name="ios-checkmark-outline"
                    size={14}
                    color={theme.WHITE_COLOR}
                  />
                </View>
                <View style={[styles.checkMark, styles.secondMark]}>
                  <Icons
                    name="ios-checkmark-outline"
                    size={14}
                    color={theme.WHITE_COLOR}
                  />
                </View>
                <View style={[styles.checkMark, styles.thirdMark]}>
                  <Icons
                    name="ios-checkmark-outline"
                    size={14}
                    color={theme.WHITE_COLOR}
                  />
                </View>
                <View style={[styles.checkMark]}>
                  <Icons
                    name="ios-checkmark-outline"
                    size={14}
                    color={theme.WHITE_COLOR}
                  />
                </View>
              </View>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.location}>Arrived at Malingo Street</Text>
              <Text style={styles.dateArrival}>07 Dec 2020</Text>
            </View>
          </View>
          <View style={styles.horizontal} />
          <View style={styles.statusContainer}>
            <Text style={styles.orderSubTitle}>Delivery address</Text>
            <View style={styles.addressContainer}>
              <Text style={styles.addressText}>Malingo Street</Text>
              <Text style={styles.addressText}>Buea</Text>
              <Text style={styles.addressText}>South West CMR</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetails;
