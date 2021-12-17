import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.TRANSPARENT,
    margin: 0,
    justifyContent: 'flex-end',
  },
  cardContainer: {
    borderTopLeftRadius: theme.BORDER_IMAGE + 6,
    borderTopRightRadius: theme.BORDER_IMAGE + 6,
    backgroundColor: theme.WHITE_COLOR,
    paddingHorizontal: 8,
    paddingBottom: 12,
    paddingTop: 12,
    height: 'auto',
  },
  cardInput: {
    borderWidth: 0,
    marginBottom: 10,
    paddingRight: 5,
  },
  actionButton: {
    paddingVertical: 8,
    borderRadius: theme.LARGE_BORDER_RADIUS,
    marginTop: 10,
  },
  actionButtonText: {
    color: theme.WHITE_COLOR,
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_NORMAL + 1,
  },
  success: {
    backgroundColor: theme.TERTIARY_COLOR,
  },
});

export default styles;
