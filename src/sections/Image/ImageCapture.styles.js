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
    backgroundColor: theme.WHITE_COLOR,
    paddingHorizontal: 10,
    paddingVertical: 8,
    paddingBottom: 14,
  },
  downIndicator: {
    position: 'absolute',
    top: 0,
    left: '50%',
    paddingTop: 2.5,
    zIndex: 9999,
  },
  actionInfo: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.TERTIARY_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    marginBottom: 5,
    marginTop: 12,
  },
  actionButton: {
    paddingVertical: 8,
    borderRadius: theme.LARGE_BORDER_RADIUS,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: {
    color: theme.WHITE_COLOR,
    textAlign: 'center',
    marginHorizontal: 10,
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
