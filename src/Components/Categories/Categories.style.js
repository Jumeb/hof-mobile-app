import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    width: 100,
    backgroundColor: theme.white_color,
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 5,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowColor: theme.dark_grey,
    shadowRadius: 8,
    elevation: 6,
    // borderWidth: 2,
  },
  variety: {
    flex: 1,
    borderRadius: 8,
  },
  varietyButton: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  varietyButtonText: {
    color: theme.white_color,
    fontSize: theme.font_size_small,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default styles;
