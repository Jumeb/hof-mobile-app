import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    borderRadius: theme.BORDER_IMAGE,
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.SECONDARY_COLOR,
    shadowRadius: 8,
    shadowOpacity: 0.8,
    elevation: 3,
    backgroundColor: theme.WHITE_COLOR,
  },
  orderImageContainer: {},
  orderImage: {
    borderRadius: theme.BORDER_IMAGE,
    height: 120,
    width: 120,
  },
  addToCartButton: {
    height: 30,
    width: 30,
    marginLeft: 'auto',
    backgroundColor: theme.SECONDARY_COLOR,
    borderRadius: theme.CIRCLE_BORDER_RADIUS,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.LIGHT_GREY,
    shadowRadius: 8,
    shadowOpacity: 0.6,
    elevation: 3,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 4,
    paddingBottom: 8,
  },
  pastryDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 6,
    // width: '100%',
  },
  pastryName: {
    fontSize: theme.FONT_SIZE_NORMAL,
    color: theme.DARK_GREY,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  likesContainer: {
    width: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  pastryStats: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'center',
    marginTop: 4,
    justifyContent: 'center',
  },
  bestDiscount: {
    backgroundColor: theme.SUCCESS_COLOR,
    borderRadius: theme.BORDER_IMAGE - 1.5,
    padding: 1.5,
    paddingHorizontal: 3,
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.LIGHT_GREY,
    shadowRadius: 8,
    shadowOpacity: 0.8,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bestDiscountText: {
    fontSize: theme.FONT_SIZE_EXTRA_SMALL - 1.5,
    color: theme.WHITE_COLOR,
    marginLeft: 6,
  },
  pastryPrice: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.LIGHT_GREY,
  },
  currency: {
    paddingBottom: 3,
    fontSize: theme.FONT_SIZE_SMALL - 2,
    color: theme.LIGHT_GREY,
  },
  pastryLikes: {
    color: theme.SECONDARY_COLOR,
    fontWeight: '700',
    fontSize: 12,
  },
  pastryIconDetails: {
    flexDirection: 'row',
    marginRight: 12,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomMargin: {
    marginBottom: 'auto',
  },
  quantityText: {
    fontSize: theme.FONT_SIZE_SMALL - 1,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    color: theme.TERTIARY_COLOR,
  },
  detailCardContainer: {
    overflow: 'hidden',
    backgroundColor: theme.WHITE_COLOR,
    borderRadius: theme.BORDER_IMAGE,
    margin: 8,
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.LIGHT_GREY,
    shadowRadius: 8,
    shadowOpacity: 0.8,
    elevation: 3,
  },
  detailImage: {
    height: 160,
    width: 180,
    resizeMode: 'cover',
  },
  detailText: {
    paddingTop: 8,
    // textAlign: 'center',
    fontSize: theme.FONT_SIZE_SMALL,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  detailTextPrice: {
    paddingBottom: 8,
    fontSize: theme.FONT_SIZE_EXTRA_SMALL,
  },
  detailTextQty: {
    paddingBottom: 8,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_EXTRA_SMALL,
  },
  infoContain: {
    alignItems: 'flex-start',
    paddingHorizontal: 8,
  },
});

export default styles;
