import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  gradient: {
    marginVertical: 25,
    borderRadius: theme.LARGE_BORDER_RADIUS,
    marginBottom: 20,
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.LIGHT_GREY,
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 3,
    overflow: 'hidden',
  },
  Button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 13,
  },
  ButtonText: {
    color: theme.WHITE_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    marginHorizontal: 10,
  },
  rateButton: {
    borderRadius: theme.BORDER_IMAGE - 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: theme.SECONDARY_COLOR,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    shadowColor: theme.LIGHT_GREY,
    shadowOpacity: 0.8,
    elevation: 3,
    marginRight: 8,
  },
  rateButtonText: {
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.WHITE_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    marginLeft: 12,
  },
});

export default styles;
