import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainCard: {
    marginHorizontal: 15,
    borderRadius: 8,
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.LIGHT_GREY,
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 2,
    paddingTop: 18,
    paddingBottom: 10,
    paddingHorizontal: 12,
    marginVertical: 8,
    backgroundColor: theme.WHITE_COLOR,
    borderWidth: 1.8,
  },
  companyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  companyImageContainer: {
    height: 65,
    width: 65,
    borderRadius: 50,
    marginLeft: 10,
    borderWidth: 2,
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.LIGHT_GREY,
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 3,
    overflow: 'hidden',
  },
  companyImage: {
    height: 65,
    width: 65,
    resizeMode: 'cover',
  },
  companyCredentials: {
    marginLeft: 16,
  },
  companyFounder: {
    fontSize: 17,
    color: theme.WHITE_COLOR,
    fontWeight: '700',
  },
  companyName: {
    fontSize: 13,
    color: theme.WHITE_COLOR,
    fontWeight: '600',
  },
  rankContainer: {
    position: 'absolute',
    right: 8,
    alignItems: 'center',
  },
  rankNumber: {
    fontSize: 25,
    color: theme.WHITE_COLOR,
    fontWeight: '600',
  },
  rankText: {
    fontSize: 9,
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
    marginLeft: 28,
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
