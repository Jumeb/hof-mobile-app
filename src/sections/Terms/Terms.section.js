import React from 'react';
import {ScrollView, View} from 'react-native';
import Modal from 'react-native-modal';

import styles from './Terms.style';
import {GradientButton, Text} from '../../Components';

const Terms = (props) => {
  const {terms, setTerms} = props;

  return (
    <Modal
      isVisible={terms}
      style={styles.mainContainer}
      animationInTiming={500}
      animationOutTiming={400}
      onBackdropPress={() => setTerms(false)}
      onBackButtonPress={() => setTerms(false)}>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.information}>
          Eu nulla ullamco veniam dolor aliqua et quis occaecat. Officia laboris
          laboris nulla pariatur tempor cupidatat dolor magna. Deserunt qui
          incididunt labore aliquip eiusmod velit.
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
        <Text style={styles.title}>Privacy Policy</Text>
        <Text style={styles.information}>
          Eu nulla ullamco veniam dolor aliqua et quis occaecat. Officia laboris
          laboris nulla pariatur tempor cupidatat dolor magna. Deserunt qui
          incididunt labore aliquip eiusmod velit.
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
        <GradientButton title="Exit" onPress={() => setTerms(false)} />
      </ScrollView>
    </Modal>
  );
};

export default Terms;
