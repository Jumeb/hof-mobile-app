import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Action from '../ActionButton/actionButton.component';

import Button from '../ActionButton/actionButton.component';
import Delete from '../DeleteButton/deletebutton.component';
import styles from './eventCard.style';

const EventCard = (props) => {
  const {openModal} = props;
  return (
    <>
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
              <Text style={styles.eventMessageLabel}>Message: </Text>
              <Text style={styles.eventMessageInfo}>Happy Birthday</Text>
            </View>
            <View style={styles.eventDate}>
              <Text style={styles.eventDateLabel}>Date: </Text>
              <Text style={styles.eventDateInfo}>Sat, 2nd Jan, 2021</Text>
            </View>
            <View style={styles.eventTime}>
              <Text style={styles.eventTimeLabel}>Time:</Text>
              <Text style={styles.eventTimeInfo}> 02:00:PM</Text>
            </View>
            <View style={styles.eventCountDown}>
              <View style={styles.eventCountDownDays}>
                <Text style={styles.eventCountDownDaysNumber}>50</Text>
                <Text style={styles.eventCountDownDaysText}>Days</Text>
              </View>
              <View style={styles.eventCountDownTime}>
                <Text style={styles.eventCountDownTimeNumber}>
                  12 : 45 : 45
                </Text>
                <Text style={styles.eventCountDownTimeText}>
                  Hours Mins Secs
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.actionButtons}>
          <Button name="pencil" />
          <Button name="ios-cart-outline" />
          <Button name="md-gift-outline" />
        </View>
        <View style={styles.eventCost}>
          <Text style={styles.eventCostText}>Total: 50,000 FCFA</Text>
        </View>
      </View>
    </>
  );
};

export default EventCard;
