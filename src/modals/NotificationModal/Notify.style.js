import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 20,
    top: -280,
    paddingVertical: 10,
    height: 20,
  },
  notifyContainer: {
    padding: 10,
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.faint_grey,
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 2,
    borderRadius: 10,
  },
  notifyText: {
    color: theme.white_color,
    fontSize: theme.font_size_normal,
    fontWeight: '600',
    letterSpacing: 1.5,
    textAlign: 'center',
  },
});

export default styles;
