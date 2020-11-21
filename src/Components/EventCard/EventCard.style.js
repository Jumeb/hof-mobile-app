import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 8,
    borderWidth: 1.8,
    borderColor: 'transparent',
    borderRadius: 8,
    paddingTop: 7,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.dark_grey,
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 2,
  },
  eventInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  eventImage: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  eventName: {
    textAlign: 'center',
    color: theme.dark_grey,
    fontSize: 12,
    marginTop: 5,
  },
  eventCost: {
    marginTop: 7,
    // alignSelf: 'baseline',
  },
  eventCostText: {
    fontSize: 11,
    color: theme.dark_grey,
    textAlign: 'center',
  },
  eventMessage: {
    flexDirection: 'row',
    marginHorizontal: 30,
  },
  eventMessageInfo: {
    fontSize: 15,
    color: theme.primary_color,
    fontWeight: '700',
  },
  eventDate: {
    flexDirection: 'row',
    marginTop: 5,
  },
  eventDateLabel: {
    fontSize: 13,
    color: theme.light_grey + 'aa',
  },
  eventDateInfo: {
    fontSize: 10,
    color: theme.light_grey + 'ee',
    fontWeight: '600',
  },
  eventTime: {
    flexDirection: 'row',
    marginTop: 5,
  },
  eventTimeLabel: {
    fontSize: 11,
    color: theme.light_grey + 'aa',
  },
  eventTimeInfo: {
    fontSize: 11,
    color: theme.light_grey,
    fontWeight: '700',
  },
  eventCountDown: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  eventCountDownDays: {
    alignItems: 'center',
  },
  eventCountDownDaysNumber: {
    fontSize: 25,
    color: theme.dark_grey,
    fontWeight: '700',
  },
  eventCountDownDaysText: {
    fontSize: 13,
    color: theme.light_grey,
    fontWeight: '400',
    marginTop: -3,
  },
  eventCountDownTime: {
    alignItems: 'center',
    marginTop: 8,
  },
  eventCountDownTimeNumber: {
    fontSize: 15,
    color: theme.dark_grey,
    fontWeight: '700',
  },
  eventCountDownTimeText: {
    fontSize: 10,
    color: theme.light_grey,
    fontWeight: '400',
    marginTop: 4.5,
  },
  actionButtons: {
    // marginLeft: 70,
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  deleteButton: {
    marginLeft: 'auto',
    // marginBottom: 2,
  },
});

export default styles;
