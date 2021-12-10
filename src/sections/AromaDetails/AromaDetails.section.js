import React from 'react';
import {ScrollView, View} from 'react-native';
import Modal from 'react-native-modal';

import styles from './AromaDetails.style';
import {GradientButton, Text} from '../../Components';

const AromaDetails = (props) => {
  const {details, setDetails} = props;
  return (
    <Modal
      isVisible={details}
      style={styles.mainContainer}
      animationInTiming={500}
      animationOutTiming={400}
      onBackdropPress={() => setDetails(false)}
      onBackButtonPress={() => setDetails(false)}>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Aroma Coins (AC)</Text>
        <Text style={styles.information}>
          Aroma coins came as a way to efficiently to transfer funds between
          customer and chef during shopping, for faster and less time consuming
          method. It should be noted that this is not crypto currency but a
          means to quickly change location of funds with little to no risk of
          waiting on networks.
        </Text>
        <Text style={styles.subtitle}>How it works.</Text>
        <Text style={styles.information}>
          Based on the currency choosen by the chef or customer, the coins
          displayed are equivalent in figure and value to the amount deposited
          into the wallet. Thus, if a transaction cost X amount of your
          currency, your Aroma Coins will be deducted in respect to the amount
          used during the transaction.
        </Text>
        <Text style={styles.subtitle}>
          In the case of different currencies?
        </Text>
        <Text style={styles.information}>
          In a situation where the customer and the chef are using different
          currencies, the current exchange rates between these two currencies
          will be calculated and X amount of Aroma Coins will be deducted from
          the customer relative to the payment of the chef and Y amount of Aroma
          Coins will be added to the chef relative to the customer purchase
          based on the current exchange rate.
        </Text>
        <Text style={styles.subtitle}>Charges and Tax?</Text>
        <Text style={styles.information}>
          Adipisicing mollit esse commodo enim enim exercitation aliqua sint
          nostrud et ea. Laborum qui est duis officia consectetur non non aliqua
          exercitation. Dolor tempor cillum nulla qui. Laboris id aliquip
          laboris do qui excepteur id cillum tempor do veniam reprehenderit
          aliqua. Aliqua minim voluptate eiusmod qui. Laborum esse Lorem dolor
          in enim non aliquip et ipsum reprehenderit excepteur consequat.
        </Text>
        <GradientButton title="Exit" onPress={() => setDetails(false)} />
      </ScrollView>
    </Modal>
  );
};

export default AromaDetails;
