import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  new: {
    backgroundColor: theme.TERTIARY_COLOR + '4a',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: theme.BORDER_IMAGE - 2,
  },
  newText: {
    fontSize: theme.FONT_SIZE_EXTRA_SMALL,
    color: theme.TERTIARY_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  process: {
    backgroundColor: theme.SECONDARY_COLOR + '4a',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: theme.BORDER_IMAGE - 2,
  },
  processText: {
    fontSize: theme.FONT_SIZE_EXTRA_SMALL,
    color: theme.SECONDARY_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  onTheWay: {
    backgroundColor: theme.SECONESSS_COLOR + '4a',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: theme.BORDER_IMAGE - 2,
  },
  onTheWayText: {
    fontSize: theme.FONT_SIZE_EXTRA_SMALL,
    color: theme.SECONESSS_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  delivered: {
    backgroundColor: theme.SUCCESS_COLOR + '4a',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: theme.BORDER_IMAGE - 2,
  },
  deliveredText: {
    fontSize: theme.FONT_SIZE_EXTRA_SMALL,
    color: theme.SUCCESS_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  cancel: {
    backgroundColor: theme.DANGER_COLOR + '4a',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: theme.BORDER_IMAGE - 2,
  },
  cancelText: {
    fontSize: theme.FONT_SIZE_EXTRA_SMALL,
    color: theme.DANGER_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
});

export default styles;
