import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 80,
    top: -280,
    paddingVertical: 10,
    height: 20,
    // borderWidth: 1,
  },
  notifyContainer: {
    // borderWidth: 1,
    padding: 8,
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.faint_grey,
    shadowOpacity: 0.8,
    elevation: 2,
    borderRadius: 20,
  },
  notifyText: {
    color: theme.light_grey,
    fontSize: theme.font_size_small,
    textAlign: 'center',
    letterSpacing: 1,
  },
});

export default styles;
