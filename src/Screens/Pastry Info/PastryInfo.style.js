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
  infoContainer: {
    paddingHorizontal: 8,
    paddingVertical: 10,
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
    fontSize: theme.FONT_SIZE_SMALL,
    marginBottom: -4,
    color: theme.SECONDARY_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  pastryName: {
    fontSize: theme.FONT_SIZE_EXTRA_LARGE - 1,
    color: theme.DARK_GREY,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  pastryPrice: {
    lineHeight: 20,
    color: theme.DARK_GREY,
    // fontSize: theme.FONT_SIZE_SMALL,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  aboutTitle: {
    fontSize: theme.FONT_SIZE_NORMAL + 1,
    color: theme.DARK_GREY,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    marginTop: 10,
  },
  aboutText: {
    marginTop: 7,
    fontSize: theme.FONT_SIZE_SMALL + 1,
    lineHeight: 20,
    marginBottom: 8,
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
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
