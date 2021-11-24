import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.LIGHT_GREY,
    shadowOpacity: 0.8,
    elevation: 2,
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 0,
  },
  headerText: {
    fontSize: 22,
    textAlign: 'center',
  },
  eventsIndicator: {
    flexDirection: 'row',
    position: 'absolute',
    right: -4,
    alignItems: 'flex-start',
  },
  eventsCountContainer: {
    height: 18,
    width: 18,
    position: 'relative',
    borderRadius: 20,
    backgroundColor: theme.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    left: -13,
    top: -4,
  },
  eventsCount: {
    fontSize: 11,
    color: theme.WHITE_COLOR,
  },
});

export default styles;
