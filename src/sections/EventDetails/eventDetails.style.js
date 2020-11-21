import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  eventImage: {
    height: 180,
    width: '100%',
    backgroundColor: theme.light_grey,
  },
  overlayColor: {
    height: 180,
    width: '100%',
    backgroundColor: theme.dark_overlays + 'aa',
    position: 'absolute',
    top: 0,
  },
  eventDetails: {
    borderRadius: 8,
    marginHorizontal: 10,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowColor: theme.light_grey,
    shadowRadius: 8,
    elevation: 2,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: -39,
    backgroundColor: theme.white_color,
  },
  eventOwner: {
    textAlign: 'center',
    fontSize: 16,
    color: theme.dark_overlays,
    letterSpacing: 2,
    fontWeight: '700',
    paddingVertical: 8,
    backgroundColor: theme.primary_color + '77',
    marginTop: -4,
    marginHorizontal: -8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  separator: {
    marginHorizontal: -8,
    height: 0.8,
    backgroundColor: theme.light_grey,
  },
  eventCountDown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    alignItems: 'center',
  },
  eventCountDownText: {
    fontSize: 18,
    color: theme.light_grey,
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
  eventMessage: {
    borderColor: 'red',
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  eventInfo: {
    flex: 3,
    marginLeft: 10,
    color: theme.dark_grey,
    fontWeight: '700',
  },
  eventLabel: {
    // borderWidth: 1,
    flex: 2,
    fontSize: 15,
    color: theme.light_grey,
  },
});

export default styles;
