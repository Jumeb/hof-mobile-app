import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  backContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: 42,
    width: 42,
    borderRadius: theme.BORDER_IMAGE,
    shadowOffset: {width: 0, height: 1},
    shadowColor: theme.LIGHT_GREY,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default styles;
