import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.TRANSPARENT,
    margin: 0,
    justifyContent: 'flex-end',
  },
  actionContainer: {
    borderTopLeftRadius: theme.BORDER_IMAGE + 6,
    borderTopRightRadius: theme.BORDER_IMAGE + 6,
    backgroundColor: theme.TERTIARY_COLOR + 'aa',
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  actionInfo: {
    color: theme.WHITE_COLOR,
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_SMALL + 2,
    marginBottom: 8,
  },
  actionButton: {
    paddingVertical: 7.5,
    borderRadius: theme.BORDER_IMAGE - 1,
    marginTop: 10,
  },
  actionButtonText: {
    color: theme.WHITE_COLOR,
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_NORMAL + 1,
  },
  danger: {
    backgroundColor: theme.DANGER_COLOR,
  },
  success: {
    backgroundColor: theme.TERTIARY_COLOR,
  },
});

export default styles;
