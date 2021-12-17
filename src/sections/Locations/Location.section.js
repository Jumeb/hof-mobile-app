import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import Icons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import theme from '../../../resources/Colors/theme';
import {InputComponent, Text} from '../../Components';
import {setLanguage} from '../../redux/actions/TranslationAction';
import styles from './Location.styles';

const Location = (props) => {
  const {isAddress, setIsAddress, i18n} = props;
  const [location, _setLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [searchError, setSearchError] = useState(false);

  return (
    <Modal
      isVisible={isAddress}
      style={styles.mainContainer}
      animationInTiming={500}
      animationOutTiming={400}
      backdropOpacity={0.55}
      backdropColor={theme.SECONDARY_COLOR}
      onBackdropPress={() => setIsAddress(false)}
      onBackButtonPress={() => setIsAddress(false)}>
      <View style={styles.langContainer}>
        {/* <TouchableOpacity
          style={styles.downIndicator}
          onPress={() => setIsAddress(false)}>
          <Icons
            name="ios-chevron-down-outline"
            size={16}
            color={theme.TERTIARY_COLOR}
          />
        </TouchableOpacity> */}
        <Text style={styles.title}>{i18n.t('phrases.selectAddress')}</Text>
        <InputComponent
          holder={i18n.t('phrases.searchAddress')}
          type="default"
          capitalize="none"
          secure={false}
          inputError={searchError}
          toggleError={() => setSearchError(false)}
          value={search}
          setValue={(text) => setSearch(text)}
          errorMessage={i18n.t('phrases.nameTooShort')}
        />
        <ScrollView style={styles.locationScroll}>
          <TouchableOpacity
            style={styles.avLang}
            onPress={() => console.log(123)}>
            <View style={styles.loadingContainer}>
              <Text style={styles.isAddress}>Buea</Text>
              <Text style={styles.loadingLang}>
                St Peter and Paul Catholic church
              </Text>
            </View>
            <Icons
              name={'ios-radio-button-off-outline'}
              size={18}
              color={theme.SECONESSS_COLOR}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.avLang}
            onPress={() => console.log(123)}>
            <View style={styles.loadingContainer}>
              <Text style={styles.isAddress}>Buea</Text>
              <Text style={styles.loadingLang}>Malingo Junction</Text>
            </View>
            <Icons
              name={'ios-radio-button-on-outline'}
              size={18}
              color={theme.SECONESSS_COLOR}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.avLang}
            onPress={() => console.log(123)}>
            <View style={styles.loadingContainer}>
              <Text style={styles.isAddress}>Buea</Text>
              <Text style={styles.loadingLang}>St Claire</Text>
            </View>
            <Icons
              name={'ios-radio-button-off-outline'}
              size={18}
              color={theme.SECONESSS_COLOR}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.avLang}
            onPress={() => console.log(123)}>
            <View style={styles.loadingContainer}>
              <Text style={styles.isAddress}>Bamenda</Text>
              <Text style={styles.loadingLang}>Moghamo Sonac Street</Text>
            </View>
            <Icons
              name={'ios-radio-button-off-outline'}
              size={18}
              color={theme.SECONESSS_COLOR}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.avLang}
            onPress={() => console.log(123)}>
            <View style={styles.loadingContainer}>
              <Text style={styles.isAddress}>Bamenda</Text>
              <Text style={styles.loadingLang}>Moghamo Sonac Street</Text>
            </View>
            <Icons
              name={'ios-radio-button-off-outline'}
              size={18}
              color={theme.SECONESSS_COLOR}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.success]}
            onPress={() => setIsAddress(false)}>
            <Text style={styles.actionButtonText}>
              {i18n.t('phrases.currentLocation')}
            </Text>
          </TouchableOpacity>
        </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Location);
