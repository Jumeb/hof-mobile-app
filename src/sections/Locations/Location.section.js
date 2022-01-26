import React, {useState, useEffect} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import Icons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import theme from '../../../resources/Colors/theme';
import {InputComponent, Notification, Text} from '../../Components';
import {setLanguage} from '../../redux/actions/TranslationAction';
import {BASE_URL} from '../../utils';
import Thousand from '../../utils/kSeparator';
import styles from './Location.styles';

const Location = (props) => {
  const {isAddress, setIsAddress, i18n, token} = props;

  const [active, setActive] = useState(-1);
  const [location, setLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [locations, setLocations] = useState([]);
  const [notify, setNotify] = useState(false);
  const [info, setInfo] = useState({});

  useEffect(() => {
    return () => {
      setActive(-1);
    };
  }, [isAddress]);

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/locations`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        const statusCode = res.status;
        const responseJson = res.json();
        return Promise.all([statusCode, responseJson]);
      })
      .then((res) => {
        setLoading(false);
        const statusCode = res[0];
        const response = res[1];

        if (statusCode === 200) {
          setLocations(response.locations);
        }

        if (statusCode === 401) {
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.couldNotLoadLocations'),
          });
        }

        if (statusCode === 422) {
          setNotify(true);
          setInfo({
            message: response.data[0].msg,
          });
        }

        if (statusCode === 500) {
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.unexpectedError'),
          });
        }
      })
      .catch((err) => {
        if (err) {
          setLoading(false);
          setNotify(true);
          setInfo({
            type: 'error',
            msg: i18n.t('phrases.pleaseCheckInternet'),
          });
        }
      });
  }, [token, i18n]);

  const SetLocation = (data, i) => {
    setActive(i);
    setLocation(data);
  };

  return (
    <Modal
      isVisible={isAddress}
      style={styles.mainContainer}
      animationInTiming={500}
      animationOutTiming={400}
      backdropOpacity={0.55}
      backdropColor={theme.SECONDARY_COLOR}
      // animationIn="fadeInUp"
      // animationOut="fadeOutDown"
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
          {locations &&
            locations.map((_location, index) => (
              <TouchableOpacity
                key={index}
                style={styles.avLang}
                onPress={() => SetLocation(_location, index)}>
                <View style={styles.loadingContainer}>
                  <Text style={styles.isAddress}>{_location?.town}</Text>
                  <View style={styles.feeContainer}>
                    <Text style={styles.loadingLang}>
                      {_location?.location}
                    </Text>
                    <Text style={styles.fee}>
                      {_location &&
                        _location?.deliveryFee &&
                        Thousand(_location?.deliveryFee)}{' '}
                      FCFA
                    </Text>
                  </View>
                </View>
                <Icons
                  name={
                    active === index
                      ? 'ios-radio-button-on-outline'
                      : 'ios-radio-button-off-outline'
                  }
                  size={18}
                  color={theme.SECONESSS_COLOR}
                />
              </TouchableOpacity>
            ))}
          <TouchableOpacity
            style={[styles.actionButton, styles.success]}
            onPress={() => setIsAddress(false)}>
            <Text style={styles.actionButtonText}>
              {i18n.t('phrases.currentLocation')}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <Notification notify={notify} setNotify={setNotify} info={info} />
    </Modal>
  );
};

const mapStateToProps = ({i18n, auth}) => {
  return {
    i18n: i18n.i18n,
    token: auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setLanguage}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Location);
