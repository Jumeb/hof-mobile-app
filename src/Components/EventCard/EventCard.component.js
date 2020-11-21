import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import Button from '../ActionButton/ActionButton.component';
import Delete from '../DeleteButton/Deletebutton.component';
import styles from './EventCard.style';

const EventCard = (props) => {
  const {openModal} = props;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.deleteButton}>
        <Delete openModal={openModal} />
      </View>
      <View style={styles.eventInfo}>
        <TouchableOpacity>
          <Image
            source={require('../../../resources/images/bds-12.jpg')}
            style={styles.eventImage}
          />
          <Text style={styles.eventName}>James</Text>
        </TouchableOpacity>
        <View>
          <View style={styles.eventMessage}>
            <Text style={styles.eventMessageInfo}>Happy Birthday</Text>
          </View>
          <View style={styles.eventCountDown}>
            <View style={styles.eventCountDownDays}>
              <Text style={styles.eventCountDownDaysNumber}>50</Text>
              <Text style={styles.eventCountDownDaysText}>Days</Text>
            </View>
            <View style={styles.eventCountDownTime}>
              <Text style={styles.eventCountDownTimeNumber}>12 : 45 : 45</Text>
              <Text style={styles.eventCountDownTimeText}>Hours Mins Secs</Text>
            </View>
          </View>
          <View style={styles.eventCost}>
            <Text style={styles.eventCostText}>Total: 50,000 FCFA</Text>
          </View>
        </View>
      </View>
      <View style={styles.actionButtons}>
        <Button name="pencil" />
        <Button name="ios-cart-outline" />
        <Button name="md-gift-outline" shop={true} />
      </View>
      <View style={styles.eventDate}>
        <Text style={styles.eventDateInfo}>
          Saturday 2, January 2021, 02:00:PM
        </Text>
      </View>
    </View>
  );
};

export default EventCard;
