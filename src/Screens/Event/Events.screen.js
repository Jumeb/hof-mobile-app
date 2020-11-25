import React, {useState} from 'react';
import {Text, View} from 'react-native';

import {EventCard} from '../../Components';
import {Confirm} from '../../modals';
import styles from './Events.style';

const Events = () => {
  const [confirm, setConfirm] = useState(false);
  const closeModal = () => {
    setConfirm(false);
  };
  const openModal = () => {
    setConfirm(true);
  };

  return (
    <View style={styles.events}>
      <EventCard openModal={openModal} />
      <Confirm confirm={confirm} closeModal={closeModal} />
    </View>
  );
};

export default Events;
