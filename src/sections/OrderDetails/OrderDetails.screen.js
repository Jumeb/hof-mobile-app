import React, {useState} from 'react';
import {FlatList, SafeAreaView, ScrollView, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

import styles from './OrderDetails.style';
import {NavBar, OrderDetailsCard, Text} from '../../Components';
import best from '../../../resources/Dummy/best.json';
import theme from '../../../resources/Colors/theme';
import ItemsDetail from '../ItemDetail/ItemsDetail.section';

const OrderDetails = (props) => {
  const {i18n} = props;
  const [info, setInfo] = useState(false);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <NavBar screen="orderDetails" right={true} pop={true} />
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        <View style={styles.orderContainer}>
          <Text style={styles.orderTitle}>
            {i18n.t('phrases.orderDetails')}
          </Text>
        </View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={best}
          numColumns={1}
          key={'flat'}
          renderItem={({item, key}) => (
            <OrderDetailsCard key={key} onPress={() => setInfo(true)} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <View style={styles.paymentContainer}>
          <Text style={styles.orderId}>Order #03973492</Text>
          <View style={styles.budgetContainer}>
            <Text style={styles.budgetTitle}>{i18n.t('words.subtotal')}</Text>
            <Text style={styles.budgetPrice}>XAF 250,000</Text>
          </View>
          <View style={styles.budgetContainer}>
            <Text style={styles.budgetTitle}>SubTotal</Text>
            <Text style={styles.budgetPrice}>XAF 250,000</Text>
          </View>
          <View style={styles.horizontalLine} />
          <View style={styles.budgetContainer}>
            <Text style={styles.budgetTitleTotal}>{i18n.t('words.total')}</Text>
            <Text style={styles.budgetPriceTotal}>XAF 250,000</Text>
          </View>
          <View style={styles.horizontal} />
          <View style={styles.statusContainer}>
            <Text style={styles.orderSubTitle}>
              {i18n.t('phrases.orderStatus')}
            </Text>
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
              <Text style={styles.location}>
                {i18n.t('phrases.arrivedAt')} Malingo Street
              </Text>
              <Text style={styles.dateArrival}>07 Dec 2020</Text>
            </View>
          </View>
          <View style={styles.horizontal} />
          <View style={styles.statusContainer}>
            <Text style={styles.orderSubTitle}>
              {i18n.t('phrases.deliveryAddress')}
            </Text>
            <View style={styles.addressContainer}>
              <Text style={styles.addressText}>Malingo Street</Text>
              <Text style={styles.addressText}>Buea</Text>
              <Text style={styles.addressText}>South West CMR</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <ItemsDetail info={info} setInfo={setInfo} />
    </SafeAreaView>
  );
};

const mapStateToProps = ({i18n}) => {
  return {
    i18n: i18n.i18n,
  };
};

export default connect(mapStateToProps)(OrderDetails);
