import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 0,
  },
  confirmCard: {
    backgroundColor: theme.WHITE_COLOR,
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
    color: theme.LIGHT_GREY + 'aa',
  },
  eventMessageInfo: {
    fontSize: 14,
    color: theme.DARK_GREY,
    fontWeight: '600',
  },
  confirmMessage: {
    fontSize: 15,
    marginBottom: 10,
  },
});

export default styles;
