import React from 'react';
import {ScrollView, View} from 'react-native';
import Modal from 'react-native-modal';

import styles from './AromaDetails.style';
import {GradientButton, Text} from '../../Components';
import theme from '../../../resources/Colors/theme';
import {connect} from 'react-redux';

const AromaDetails = (props) => {
  const {details, setDetails, i18n} = props;
  return (
    <Modal
      isVisible={details}
      style={styles.mainContainer}
      animationInTiming={500}
      animationOutTiming={400}
      backdropOpacity={0.55}
      backdropColor={theme.SECONDARY_COLOR}
      onBackdropPress={() => setDetails(false)}
      onBackButtonPress={() => setDetails(false)}>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Aroma Coins (AC)</Text>
        <Text style={styles.information}>
          {i18n.t('phrases.aromaCoinsCame')}
        </Text>
        <Text style={styles.subtitle}>{i18n.t('phrases.howItWorks')}</Text>
        <Text style={styles.information}>{i18n.t('phrases.basedOnThe')}</Text>
        <Text style={styles.subtitle}>{i18n.t('phrases.inTheCaseOf')}</Text>
        <Text style={styles.information}>{i18n.t('phrases.inASituation')}</Text>
        <Text style={styles.subtitle}>{i18n.t('phrases.chargesAndTax')}</Text>
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

const mapStateToProps = ({i18n}) => {
  return {
    i18n: i18n.i18n,
  };
};

export default connect(mapStateToProps)(AromaDetails);
