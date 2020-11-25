import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import theme from '../../../resources/Colors/theme';

import {ModalButton} from '../../Components';
import styles from './EventDetails.style';

const EventDetails = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.mainContainer}
        showsHorizontalScrollIndicator={false}>
        <Image
          source={require('../../../resources/images/bds-12.jpg')}
          style={styles.eventImage}
        />
        <View style={styles.overlayColor} />
        <View style={styles.eventDetails}>
          <Text style={styles.eventOwner}>James</Text>
          <View style={styles.separator} />
          <View style={styles.eventIn}>
            <View style={styles.eventCountDown}>
              <Text style={styles.eventLabel}>Message</Text>
              <Text style={styles.eventInfo}>Happy Birthday Mum .....</Text>
            </View>
            <View style={styles.eventCountDown}>
              <Text style={styles.eventLabel}>Date</Text>
              <Text style={styles.eventInfo}>Saturday, 2nd Jan 2021</Text>
            </View>
            <View style={styles.eventCountDown}>
              <Text style={styles.eventLabel}>Time</Text>
              <Text style={styles.eventInfo}>03 : 00 : PM</Text>
            </View>
            <View style={styles.eventCountDown}>
              <Text style={styles.eventLabel}>Delivered at</Text>
              <Text style={styles.eventInfo}>ST. Claire Hotel</Text>
            </View>
            <View style={styles.eventCountDown}>
              <Text style={styles.eventLabel}>Total</Text>
              <Text style={styles.eventInfo}>50,000 frs</Text>
            </View>
            <View style={styles.eventCountDown}>
              <Text style={styles.eventLabel}>Bakers</Text>
              <Text style={styles.eventInfo}>
                Noella Cara, Freddy Pastry, Henry Cupcakes
              </Text>
            </View>
            <View style={[styles.eventCountDown, {marginBottom: 15}]}>
              <Text style={styles.eventCountDownText}>Count Down</Text>
              <View style={styles.eventCountDownDays}>
                <Text style={styles.eventCountDownDaysNumber}>50</Text>
                <Text style={styles.eventCountDownDaysText}>Days</Text>
              </View>
              <View style={styles.eventCountDownTime}>
                <Text style={styles.eventCountDownTimeNumber}>
                  12  :  45  :  45
                </Text>
                <Text style={styles.eventCountDownTimeText}>
                  Hours    Mins    Secs
                </Text>
              </View>
            </View>
            <View style={styles.separator} />
            <View style={styles.eventCountDown}>
              <ModalButton name="pencil" color="green" />
              <ModalButton name="trash-outline" color={theme.danger_color} />
              <ModalButton name="gift-outline" color={theme.primary_color} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EventDetails;
