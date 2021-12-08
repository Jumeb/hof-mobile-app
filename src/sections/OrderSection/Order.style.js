import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 8,
    marginTop: 8,
  },
  orderId: {
    color: theme.DARK_OVERLAYS,
    fontSize: theme.FONT_SIZE_SMALL,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    paddingHorizontal: 4,
    paddingBottom: 3,
  },
  actionButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 14,
  },
  actionButton: {
    width: theme.WIDTH_100 * 0.45,
    borderWidth: 1.5,
    paddingVertical: 4.5,
    borderRadius: theme.BORDER_IMAGE,
    borderColor: theme.SECONDARY_COLOR,
  },
  actionText: {
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_SMALL,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    color: theme.SECONDARY_COLOR,
  },
  gradient: {
    width: theme.WIDTH_100 * 0.45,
    borderRadius: theme.BORDER_IMAGE,
    overflow: 'hidden',
  },
  actionGradientButton: {
    paddingVertical: 6,
  },
  actionGradientText: {
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_SMALL,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    color: theme.WHITE_COLOR,
  },
});

export default styles;
