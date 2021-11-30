import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    width: 'auto',
    backgroundColor: theme.WHITE_COLOR,
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 5,
    marginBottom: 8,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowColor: theme.DARK_GREY,
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
    paddingHorizontal: 12,
  },
  varietyButtonText: {
    color: theme.WHITE_COLOR,
    fontSize: theme.FONT_SIZE_SMALL,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    textAlign: 'center',
  },
});

export default styles;
