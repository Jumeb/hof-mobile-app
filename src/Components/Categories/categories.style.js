import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowColor: theme.dark_grey,
    shadowRadius: 8,
    elevation: 3,
  },
  variety: {
    borderRadius: 8,
    width: 135,
    marginHorizontal: 8,
  },
  varietyButton: {
    paddingVertical: 22,
    paddingHorizontal: 8,
  },
  varietyButtonText: {
    color: theme.white_color,
    fontSize: theme.font_size_small,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default styles;
