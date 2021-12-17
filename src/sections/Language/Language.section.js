import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import Icons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import theme from '../../../resources/Colors/theme';
import {Text} from '../../Components';
import {setLanguage} from '../../redux/actions/TranslationAction';
import {Storage} from '../../utils';
import styles from './Language.styles';

const Language = (props) => {
  const {lang, setLang, i18n} = props;
  const [active, setActive] = useState(0);
  const [language, _setLanguage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const languages = [
    {name: i18n.t('words.english'), key: 'en'},
    {name: i18n.t('words.french'), key: 'fr'},
    {name: i18n.t('words.german'), key: 'de', loading: true},
  ];

  useEffect(() => {
    setTimeout(() => {
      setLang(false);
    }, 30000);
  }, [lang, setLang]);

  useEffect(() => {
    Storage.load({key: 'LOCALE'})
      .then((res) => {
        _setLanguage(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const changeLanguage = (_lang) => {
    console.log(_lang);
    _setLanguage(_lang);
    props.setLanguage(_lang);
  };

  return (
    <Modal
      isVisible={lang}
      style={styles.mainContainer}
      animationInTiming={500}
      animationOutTiming={400}
      backdropOpacity={0.55}
      backdropColor={theme.SECONDARY_COLOR}
      onBackdropPress={() => setLang(false)}
      onBackButtonPress={() => setLang(false)}
      swipeDirection={'down'}
      onSwipeComplete={() => setLang(false)}>
      <View style={styles.langContainer}>
        <TouchableOpacity
          style={styles.downIndicator}
          onPress={() => setLang(false)}>
          <Icons
            name="ios-chevron-down-outline"
            size={16}
            color={theme.TERTIARY_COLOR}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{i18n.t('phrases.chooseLanguage')}</Text>
        {languages.map((langue, key) => (
          <TouchableOpacity
            style={styles.avLang}
            key={key}
            onPress={() => changeLanguage(langue.key)}>
            <View style={styles.loadingContainer}>
              <Text style={styles.lang}>{langue.name}</Text>
              {langue.loading && (
                <Text style={styles.loadingLang}>
                  {i18n.t('words.loading')}
                </Text>
              )}
            </View>
            <Icons
              name={
                langue.key === language
                  ? 'ios-radio-button-on-outline'
                  : 'ios-radio-button-off-outline'
              }
              size={18}
              color={theme.SECONESSS_COLOR}
            />
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
};

const mapStateToProps = ({i18n}) => {
  return {
    i18n: i18n.i18n,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setLanguage}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Language);
