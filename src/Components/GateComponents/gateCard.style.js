import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 15,
    borderRadius: 8,
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.light_grey,
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 3,
    paddingTop: 18,
    paddingBottom: 10,
    paddingHorizontal: 12,
    marginVertical: 10,
  },
  companyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-around',
  },
  companyImage: {
    height: 65,
    width: 65,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 50,
    marginLeft: 18,
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.light_grey,
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 3,
  },
  companyCredentials: {
    marginLeft: 16,
  },
  companyFounder: {
    fontSize: 17,
    color: theme.white_color,
    fontWeight: '700',
  },
  companyName: {
    fontSize: 13,
    color: theme.white_color,
    fontWeight: '600',
  },
  rankContainer: {
    position: 'absolute',
    right: 8,
    alignItems: 'center',
  },
  rankNumber: {
    fontSize: 25,
    color: theme.white_color,
    fontWeight: '600',
  },
  rankText: {
    fontSize: 12,
    color: theme.white_color,
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
    color: theme.white_color,
    fontWeight: '700',
  },
  companyOrdersText: {
    color: theme.white_color,
    fontSize: 12,
    letterSpacing: 1.6,
    marginTop: -4,
  },
  companySign: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: theme.white_color,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
  },
  companyLogo: {
    height: 25,
    width: 25,
    tintColor: theme.primary_color,
  },
});

export default styles;
