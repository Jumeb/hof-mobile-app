import React, {useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';

import styles from './DeleteModal.styles';
import theme from '../../../resources/Colors/theme';
import {Text} from '..';

const DeleteModal = (props) => {
  const {
    _delete,
    setDelete,
    isDelete,
    setIsDelete,
    i18n,
    location,
    onPress,
  } = props;

  useEffect(() => {
    setTimeout(() => {
      setIsDelete(false);
    }, 60000);
  }, [isDelete, setIsDelete]);

  const removeString =
    location === 'cart'
      ? i18n.t('phrases.fromCart')
      : location === 'favourites'
      ? i18n.t('phrases.fromFavourites')
      : i18n.t('phrases.fromThisGroup');

  return (
    <Modal
      isVisible={isDelete}
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
          {i18n.t('words.remove')} {_delete?.pastryId?.name} {removeString}
        </Text>
        <TouchableOpacity
          style={[styles.actionButton, styles.danger]}
          onPress={() => onPress(_delete)}>
          <Text style={styles.actionButtonText}>{i18n.t('words.remove')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.success]}
          onPress={() => setIsDelete(false)}>
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
