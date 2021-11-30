import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.LIGHT_GREY,
    shadowRadius: 8,
    shadowOpacity: 0.8,
    elevation: 3,
    overflow: 'hidden',
    borderRadius: theme.BORDER_IMAGE,
    marginHorizontal: 8,
    marginBottom: 5,
    width: 250,
    backgroundColor: theme.WHITE_COLOR,
  },
  bestContainer: {
    flex: 1,
    paddingVertical: 10,
  },
  bestBackground: {
    height: 155,
    borderRadius: theme.BORDER_IMAGE,
  },
  pastryName: {
    fontSize: theme.FONT_SIZE_LARGE - 1,
    color: theme.DARK_GREY,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    marginBottom: -1,
  },
  pastryPrice: {
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.LIGHT_GREY,
  },
  pastryLikes: {
    fontSize: theme.FONT_SIZE_EXTRA_SMALL,
    marginLeft: 8,
    color: theme.WHITE_COLOR,
  },
  likesContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 6,
    flexDirection: 'row',
    marginRight: 5,
  },
  bestDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },
  addToCartButton: {
    height: 30,
    width: 30,
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
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 'auto',
    marginHorizontal: 10,
  },
  bestInfo: {
    paddingHorizontal: 10,
    marginBottom: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bestInfoButton: {
    textAlign: 'right',
    marginLeft: 'auto',
  },
  bestDiscount: {
    backgroundColor: theme.WHITE_COLOR,
    borderRadius: theme.BORDER_IMAGE - 2,
    padding: 2,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bestDiscountText: {
    fontSize: theme.FONT_SIZE_EXTRA_SMALL,
    color: theme.SUCCESS_COLOR,
    marginLeft: 6,
  },
});

export default styles;
