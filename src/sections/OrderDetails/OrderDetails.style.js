import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.WHITE_COLOR,
    marginTop: 30,
  },
  scrollView: {
    flex: 1,
  },
  orderContainer: {
    marginTop: 5,
    marginBottom: 10,
  },
  orderTitle: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.DARK_GREY,
    marginVertical: 5,
    paddingHorizontal: 6,
  },
  orderSubTitle: {
    color: theme.DARK_OVERLAYS,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    paddingBottom: 3,
    marginBottom: 4,
  },
  orderId: {
    color: theme.DARK_OVERLAYS,
    fontSize: theme.FONT_SIZE_SMALL,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    paddingHorizontal: 4,
    paddingBottom: 3,
  },
  paymentContainer: {
    paddingHorizontal: 12,
    marginHorizontal: -2,
    marginTop: 16,
    marginBottom: 25,
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
  budgetTitleTotal: {
    fontSize: theme.FONT_SIZE_NORMAL,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    color: theme.DARK_GREY,
  },
  budgetPriceTotal: {
    fontSize: theme.FONT_SIZE_NORMAL,
  },
  horizontalLine: {
    borderWidth: 0.8,
    marginVertical: 8,
    marginBottom: 6,
    borderColor: theme.PRIMARY_COLOR,
  },
  horizontal: {
    borderWidth: 0.6,
    marginTop: 25,
    marginBottom: 13,
    borderColor: theme.LIGHT_GREY,
  },
  statusContainer: {
    marginTop: 12,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    fontSize: theme.FONT_SIZE_NORMAL - 3,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  dateArrival: {
    fontSize: theme.FONT_SIZE_NORMAL - 2.4,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    color: theme.DARK_GREY,
  },
  progressBar: {
    marginVertical: 14,
  },
  gradient: {
    flex: 1,
    padding: 1.5,
  },
  checkMarkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -11.5,
  },
  checkMark: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 18,
    width: 18,
    borderWidth: 0.7,
    borderColor: theme.LIGHT_GREY,
    borderRadius: theme.CIRCLE_BORDER_RADIUS,
    backgroundColor: theme.WHITE_COLOR,
  },
  firstMark: {
    borderColor: theme.PRIMARY_COLOR,
    backgroundColor: theme.PRIMARY_COLOR,
  },
  secondMark: {
    borderColor: theme.SECONDARY_COLOR,
    backgroundColor: theme.SECONDARY_COLOR,
  },
  thirdMark: {
    borderColor: theme.SECONESSS_COLOR,
    backgroundColor: theme.SECONESSS_COLOR,
  },
  fourthMark: {
    borderColor: theme.SUCCESS_COLOR,
    backgroundColor: theme.SUCCESS_COLOR,
  },
  addressText: {
    fontSize: theme.FONT_SIZE_NORMAL - 2.4,
    color: theme.LIGHT_GREY,
  },
});

export default styles;
