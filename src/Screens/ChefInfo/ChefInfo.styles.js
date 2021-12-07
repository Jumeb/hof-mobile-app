import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.WHITE_COLOR,
    marginTop: 32,
  },
  scrollview: {
    flex: 1,
  },
  chefContainer: {},
  chefImage: {
    resizeMode: 'cover',
    width: theme.WIDTH_100,
    // justifyContent: 'center',
    height: 430,
  },
  chefLogoContainer: {
    position: 'absolute',
    bottom: 9,
    right: 9,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    paddingHorizontal: 6,
    paddingVertical: 2,
    alignItems: 'center',
    borderRadius: theme.BORDER_IMAGE - 2,
    // shadowOffset: {width: 0, height: 2},
    // shadowRadius: 8,
    // shadowColor: theme.LIGHT_GREY,
    // shadowOpacity: 0.8,
    // elevation: 3,
  },
  chefLogo: {
    resizeMode: 'contain',
    width: 80,
    height: 40,
  },
  infoContainer: {
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  companyName: {
    fontSize: theme.FONT_SIZE_SMALL,
    marginBottom: -4,
    color: theme.SECONDARY_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  ceoName: {
    fontSize: theme.FONT_SIZE_EXTRA_LARGE - 1,
    color: theme.DARK_GREY,
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
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 2,
  },
  contactText: {
    fontSize: theme.FONT_SIZE_SMALL,
    marginLeft: 8,
  },
});
export default styles;
