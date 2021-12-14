import React from 'react';
import {FlatList, ScrollView, TouchableOpacity, View} from 'react-native';

import styles from './Order.style';
import {OrderCard, Text} from '../../Components';
import best from '../../../resources/Dummy/best.json';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../../resources/Colors/theme';
import {connect} from 'react-redux';

const OrderSection = (props) => {
  const {onPress, onDet, i18n} = props;
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.orderId}>Order #3462655</Text>
      <FlatList
        horizontal={false}
        data={best}
        renderItem={({item, key}) => (
          <OrderCard onPress={() => onDet()} key={key} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.actionButtonContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>{i18n.t('words.refund')}</Text>
        </TouchableOpacity>
        <LinearGradient
          style={styles.gradient}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          colors={[theme.PRIMARY_COLOR, theme.SECONDARY_COLOR]}>
          <TouchableOpacity
            style={styles.actionGradientButton}
            onPress={() => onPress()}>
            <Text style={styles.actionGradientText}>
              {i18n.t('words.details')}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

const mapStateToProps = ({i18n}) => {
  return {
    i18n: i18n.i18n,
  };
};

export default connect(mapStateToProps)(OrderSection);
