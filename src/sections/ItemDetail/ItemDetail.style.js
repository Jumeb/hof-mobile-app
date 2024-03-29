import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'flex-end',
    margin: 0,
    backgroundColor: theme.TRANSPARENT,
  },
  detailContainer: {
    borderTopLeftRadius: theme.BORDER_IMAGE + 6,
    borderTopRightRadius: theme.BORDER_IMAGE + 6,
    backgroundColor: theme.WHITE_COLOR,
    paddingBottom: 12,
    overflow: 'hidden',
    height: 'auto',
  },
  downIndicator: {
    position: 'absolute',
    top: 4,
    left: '50%',
    paddingTop: 2.5,
    backgroundColor: theme.WHITE_COLOR,
    borderRadius: theme.LARGE_BORDER_RADIUS,
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    shadowColor: theme.LIGHT_GREY,
    shadowOpacity: 0.8,
    elevation: 3,
    zIndex: 9999,
  },
  title: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.TERTIARY_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    marginBottom: 5,
    marginTop: 12,
  },
  pastryContainer: {},
  pastryImage: {
    resizeMode: 'cover',
    width: theme.WIDTH_100,
    // justifyContent: 'center',
    height: 280,
  },
  pastryImageCounter: {
    position: 'absolute',
    bottom: 9,
    right: 9,
    flexDirection: 'row',
    backgroundColor: theme.WHITE_COLOR,
    justifyContent: 'center',
    alignItems: 'baseline',
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderRadius: theme.BORDER_IMAGE - 2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    shadowColor: theme.LIGHT_GREY,
    shadowOpacity: 0.8,
    elevation: 3,
  },
  pastryIndex: {
    color: theme.SECONDARY_COLOR,
  },
  pastryLength: {
    fontSize: theme.FONT_SIZE_EXTRA_SMALL,
    marginLeft: 1,
    lineHeight: 20,
    letterSpacing: 3,
    color: theme.TERTIARY_COLOR,
  },
  categoryName: {
    fontSize: theme.FONT_SIZE_EXTRA_SMALL,
    marginBottom: -4,
    color: theme.SECONDARY_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  pastryName: {
    fontSize: theme.FONT_SIZE_EXTRA_LARGE - 3,
    color: theme.DARK_GREY,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  pastryPrice: {
    lineHeight: 20,
    color: theme.DARK_GREY,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  infoContainer: {
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  detsContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    // marginBottom: 1,
  },
  aboutTitle: {
    fontSize: theme.FONT_SIZE_NORMAL + 1,
    color: theme.DARK_GREY,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    marginTop: 5,
  },
  aboutText: {
    marginTop: 4,
    fontSize: theme.FONT_SIZE_SMALL + 1,
    lineHeight: 20,
  },
  aboutContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
  },
  status: {
    fontSize: theme.FONT_SIZE_SMALL + 1,
    color: theme.DARK_GREY,
    marginRight: 5,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 10,
    marginBottom: 5,
  },
  controlsContainer: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  qtyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accumelatedPrice: {
    fontWeight: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_NORMAL + 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  qtyButton: {
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
  qtyText: {
    marginHorizontal: 20,
    fontSize: theme.FONT_SIZE_SMALL,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
});

export default styles;
