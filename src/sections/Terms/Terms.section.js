import React from 'react';
import {ScrollView, View} from 'react-native';
import Modal from 'react-native-modal';

import styles from './Terms.style';
import {GradientButton, Text} from '../../Components';
import theme from '../../../resources/Colors/theme';
import {connect} from 'react-redux';

const Terms = (props) => {
  const {terms, setTerms, i18n} = props;

  return (
    <Modal
      isVisible={terms}
      style={styles.mainContainer}
      animationInTiming={500}
      animationOutTiming={400}
      backdropOpacity={0.55}
      backdropColor={theme.SECONDARY_COLOR}
      onBackdropPress={() => setTerms(false)}
      onBackButtonPress={() => setTerms(false)}>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{i18n.t('phrases.termsAndConditions')}</Text>
        <Text style={styles.information}>
          Eu nulla ullamco veniam dolor aliqua et quis occaecat. Officia laboris
          laboris nulla pariatur tempor cupidatat dolor magna. Deserunt qui
          incididunt labore aliquip eiusmod velit.
        </Text>
        <Text style={styles.subtitle}>{i18n.t('phrases.chargesAndTax')}</Text>
        <Text style={styles.information}>
          Adipisicing mollit esse commodo enim enim exercitation aliqua sint
          nostrud et ea. Laborum qui est duis officia consectetur non non aliqua
          exercitation. Dolor tempor cillum nulla qui. Laboris id aliquip
          laboris do qui excepteur id cillum tempor do veniam reprehenderit
          aliqua. Aliqua minim voluptate eiusmod qui. Laborum esse Lorem dolor
          in enim non aliquip et ipsum reprehenderit excepteur consequat.
        </Text>
        <Text style={styles.title}>{i18n.t('phrases.privacyPolicy')}</Text>
        <Text style={styles.information}>
          Eu nulla ullamco veniam dolor aliqua et quis occaecat. Officia laboris
          laboris nulla pariatur tempor cupidatat dolor magna. Deserunt qui
          incididunt labore aliquip eiusmod velit.
        </Text>
        <Text style={styles.subtitle}>{i18n.t('phrases.chargesAndTax')}</Text>
        <Text style={styles.information}>
          Adipisicing mollit esse commodo enim enim exercitation aliqua sint
          nostrud et ea. Laborum qui est duis officia consectetur non non aliqua
          exercitation. Dolor tempor cillum nulla qui. Laboris id aliquip
          laboris do qui excepteur id cillum tempor do veniam reprehenderit
          aliqua. Aliqua minim voluptate eiusmod qui. Laborum esse Lorem dolor
          in enim non aliquip et ipsum reprehenderit excepteur consequat.
        </Text>
        <GradientButton title="Exit" onPress={() => setTerms(false)} />
      </ScrollView>
    </Modal>
  );
};

const mapStateToProps = ({i18n}) => {
  return {
    i18n: i18n.i18n,
  };
};

export default connect(mapStateToProps)(Terms);
