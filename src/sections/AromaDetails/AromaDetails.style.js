import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.WHITE_COLOR,
    margin: 0,
    marginTop: 50,
    borderTopLeftRadius: theme.BORDER_IMAGE + 4,
    borderTopRightRadius: theme.BORDER_IMAGE + 4,
    paddingHorizontal: 8,
    // paddingVertical: 12,
  },
  title: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.TERTIARY_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    marginBottom: 5,
    marginTop: 12,
  },
  information: {
    lineHeight: 20,
    color: theme.DARK_GREY,
  },
  subtitle: {
    fontSize: theme.FONT_SIZE_LARGE - 2.5,
    color: theme.TERTIARY_COLOR,
    marginVertical: 8,
    textDecorationLine: 'underline',
  },
});

export default styles;
