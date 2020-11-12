import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 0,
  },
  confirmCard: {
    backgroundColor: theme.white_color,
    padding: 10,
    marginHorizontal: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmOptions: {
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  eventMessage: {
    flexDirection: 'row',
  },
  eventMessageLabel: {
    fontSize: 14,
    color: theme.light_grey + 'aa',
  },
  eventMessageInfo: {
    fontSize: 14,
    color: theme.dark_grey,
    fontWeight: '600',
  },
  confirmMessage: {
    fontSize: 15,
    marginBottom: 10,
  }
});

export default styles;
