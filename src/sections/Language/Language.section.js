import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import Icons from 'react-native-vector-icons/Ionicons';
import theme from '../../../resources/Colors/theme';

import {Text} from '../../Components';
import styles from './Language.styles';

const Language = (props) => {
  const {lang, setLang} = props;
  const [active, setActive] = useState(0);
  return (
    <Modal
      isVisible={lang}
      style={styles.mainContainer}
      animationInTiming={500}
      animationOutTiming={400}
      onBackdropPress={() => setLang(false)}
      onBackButtonPress={() => setLang(false)}
      swipeDirection={['down', 'left']}
      onSwipeComplete={() => setLang(false)}>
      <View style={styles.langContainer}>
        <Text style={styles.title}>Choose Language</Text>
        <TouchableOpacity style={styles.avLang} onPress={() => setActive(0)}>
          <Text style={styles.lang}>English</Text>
          <Icons
            name={
              active === 0
                ? 'ios-radio-button-on-outline'
                : 'ios-radio-button-off-outline'
            }
            size={18}
            color={theme.SECONESSS_COLOR}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.avLang} onPress={() => setActive(1)}>
          <Text style={styles.lang}>French</Text>
          <Icons
            name={
              active === 1
                ? 'ios-radio-button-on-outline'
                : 'ios-radio-button-off-outline'
            }
            size={18}
            color={theme.SECONESSS_COLOR}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.avLang}>
          <View style={styles.loadingContainer}>
            <Text style={styles.lang}>German</Text>
            <Text style={styles.loadingLang}>Loading</Text>
          </View>
          <Icons
            name={
              active === 2
                ? 'ios-radio-button-on-outline'
                : 'ios-radio-button-off-outline'
            }
            size={18}
            color={theme.SECONESSS_COLOR}
          />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default Language;
