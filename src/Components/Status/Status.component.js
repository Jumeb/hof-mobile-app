import React, {useState} from 'react';
import {View} from 'react-native';

import styles from './Status.style';
import {Text} from '..';

const Status = (props) => {
  const {status, i18n} = props;
  const statusStyle =
    status === 'new'
      ? {view: styles.new, text: styles.newText, key: i18n.t('words.new')}
      : status === 'processing'
      ? {
          view: styles.process,
          text: styles.processText,
          key: i18n.t('words.processing'),
        }
      : status === 'onTheWay'
      ? {
          view: styles.onTheWay,
          text: styles.onTheWayText,
          key: i18n.t('phrases.onTheWay'),
        }
      : status === 'delivered'
      ? {
          view: styles.delivered,
          text: styles.deliveredText,
          key: i18n.t('words.delivered'),
        }
      : {
          view: styles.cancel,
          text: styles.cancelText,
          key: i18n.t('words.cancelled'),
        };

  return (
    <View style={statusStyle.view}>
      <Text style={statusStyle.text}>{statusStyle.key}</Text>
    </View>
  );
};

export default Status;
