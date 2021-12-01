import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.WHITE_COLOR,
    marginTop: 32,
    position: 'relative',
  },
  scrollView: {
    flex: 1,
  },
  cartContainer: {
    marginTop: 45,
  },
  cartTitleContainer: {
    flex: 1,
    paddingHorizontal: 14,
    marginVertical: 4,
    marginBottom: 10,
  },
  cartTitle: {
    fontSize: theme.FONT_SIZE_EXTRA_LARGE - 1.5,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    color: theme.TERTIARY_COLOR,
  },
  cartSubTitle: {
    fontSize: theme.FONT_SIZE_EXTRA_LARGE - 1.5,
    color: theme.TERTIARY_COLOR,
    lineHeight: 25,
  },
  paymentContainer: {
    paddingHorizontal: 12,
    marginHorizontal: -2,
    marginTop: 16,
    marginBottom: 25,
    borderRadius: theme.BORDER_IMAGE + 10,
    elevation: 3,
    backgroundColor: theme.WHITE_COLOR,
  },
  paymentTitle: {
    fontSize: theme.FONT_SIZE_LARGE - 1,
    color: theme.TERTIARY_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    paddingVertical: 10,
  },
  budgetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  budgetTitle: {
    fontSize: theme.FONT_SIZE_SMALL,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    color: theme.DARK_GREY,
  },
  budgetPrice: {
    fontSize: theme.FONT_SIZE_SMALL,
  },
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
  checkoutButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 13,
  },
  checkoutButtonText: {
    color: theme.WHITE_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    marginHorizontal: 60,
  },
  budgetTitleTotal: {
    fontSize: theme.FONT_SIZE_NORMAL,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    color: theme.DARK_GREY,
  },
  budgetPriceTotal: {
    fontSize: theme.FONT_SIZE_NORMAL,
  },
  horizontalLine: {
    borderWidth: 0.9,
    marginVertical: 12,
    borderColor: theme.PRIMARY_COLOR,
  },
});

export default styles;
