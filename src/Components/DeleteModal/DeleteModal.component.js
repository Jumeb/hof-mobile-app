import React, {useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';

import styles from './DeleteModal.styles';
import theme from '../../../resources/Colors/theme';
import {Text} from '..';

const DeleteModal = (props) => {
  const {_delete, setDelete, i18n, setNotify, location} = props;

  useEffect(() => {
    setTimeout(() => {
      setDelete(false);
    }, 60000);
  }, [_delete, setDelete]);

  const removeString =
    location === 'cart'
      ? i18n.t('phrases.fromCart')
      : location === 'favourites'
      ? i18n.t('phrases.fromFavourites')
      : i18n.t('phrases.fromThisGroup');

  const Confirm = () => {
    setDelete(false);
    setNotify(true);
  };

  return (
    <Modal
      isVisible={_delete}
      style={styles.mainContainer}
      animationInTiming={500}
      animationOutTiming={400}
      backdropOpacity={0}
      backdropColor={theme.TRANSPARENT}
      onBackdropPress={() => setDelete(false)}
      onBackButtonPress={() => setDelete(false)}
      swipeDirection={'down'}
      onSwipeComplete={() => setDelete(false)}>
      <View style={styles.actionContainer}>
        <Text style={styles.actionInfo}>
          {i18n.t('words.remove')} pastryname {removeString}
        </Text>
        <TouchableOpacity
          style={[styles.actionButton, styles.danger]}
          onPress={() => Confirm()}>
          <Text style={styles.actionButtonText}>{i18n.t('words.remove')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.success]}
          onPress={() => setDelete(false)}>
          <Text style={styles.actionButtonText}>{i18n.t('words.cancel')}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const mapStateToProps = ({i18n}) => {
  return {
    i18n: i18n.i18n,
  };
};

export default connect(mapStateToProps)(DeleteModal);
