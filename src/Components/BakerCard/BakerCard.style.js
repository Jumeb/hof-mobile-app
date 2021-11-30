import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainCard: {
    width: '46%',
    marginHorizontal: 15,
    borderRadius: theme.BORDER_IMAGE,
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.LIGHT_GREY,
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 2,
    marginVertical: 8,
    overflow: 'hidden',
    backgroundColor: theme.WHITE_COLOR,
  },
  companyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  companyInfoButton: {
    position: 'absolute',
    top: 9,
    right: 7,
  },
  companyImageContainer: {
    width: '100%',
    position: 'relative',
  },
  companyImage: {
    height: 165,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: theme.BORDER_IMAGE,
  },
  companyCredentials: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 5,
  },
  companyFounder: {
    fontSize: theme.FONT_SIZE_NORMAL - 1,
    color: theme.DARK_GREY,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  companyName: {
    fontSize: 13,
    color: theme.LIGHT_GREY,
    fontWeight: '600',
  },
  rankContainer: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 7,
    bottom: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rankText: {
    fontSize: theme.FONT_SIZE_SMALL - 2,
    color: theme.WHITE_COLOR,
    letterSpacing: 1.1,
  },
  companyStats: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: 83,
    marginTop: 12,
  },
  companyOrders: {
    alignItems: 'center',
  },
  companyOrdersNumber: {
    fontSize: 14,
    color: theme.WHITE_COLOR,
    fontWeight: '700',
  },
  companyOrdersText: {
    color: theme.WHITE_COLOR,
    fontSize: 12,
    letterSpacing: 1.6,
    marginTop: -4,
  },
  companySign: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: theme.WHITE_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.LIGHT_GREY,
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 3,
  },
  companyLogo: {
    height: 25,
    width: 25,
  },
});

export default styles;
