import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.WHITE_COLOR,
    marginTop: 30,
  },
  idContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 8,
    backgroundColor: theme.WHITE_COLOR,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowColor: theme.PRIMARY_COLOR,
    elevation: 3,
  },
  idImage: {
    height: 42,
    width: 42,
    borderRadius: theme.LARGE_BORDER_RADIUS,
    resizeMode: 'cover',
    marginRight: 10,
  },
  idGreetings: {
    fontWeight: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_LARGE - 2,
    color: theme.DARK_GREY,
    marginVertical: 5,
  },
  idName: {
    fontSize: theme.FONT_SIZE_LARGE - 2,
    color: theme.DARK_GREY,
    marginVertical: 5,
  },
  scrollContainer: {
    // marginTop: 25,
    paddingTop: 5,
    // paddingBottom: ,
  },
  scrollTitle: {
    fontWeight: theme.FONT_WEIGHT_BOLD,
    color: theme.TERTIARY_COLOR,
    fontSize: theme.FONT_SIZE_NORMAL + 2,
    letterSpacing: 1,
  },
  walletCard: {
    marginVertical: 25,
    marginHorizontal: 22,
    alignItems: 'center',
    borderRadius: theme.BORDER_IMAGE + 10,
    paddingVertical: 30,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowColor: theme.PRIMARY_COLOR,
    elevation: 5,
  },
  walletText: {
    fontSize: theme.FONT_SIZE_SMALL,
    marginBottom: 7,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
    alignItems: 'center',
  },
  walletInfo: {
    fontSize: theme.FONT_SIZE_EXTRA_LARGE + 4,
    color: theme.SECONESSS_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  walletCoin: {
    fontSize: theme.FONT_SIZE_EXTRA_LARGE + 4,
    color: theme.SECONESSS_COLOR,
  },
  walletEq: {
    fontSize: theme.FONT_SIZE_SMALL,
  },
  walletCash: {
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.WHITE_COLOR,
  },
  topupButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    borderColor: theme.WHITE_COLOR,
    borderWidth: 1.5,
    borderRadius: theme.BORDER_IMAGE,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginTop: 10,
  },
  topupText: {
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.WHITE_COLOR,
  },
  opTitle: {
    marginVertical: 15,
    paddingHorizontal: 8,
  },
  opContainer: {
    marginHorizontal: 5,
    //   justifyContent: 'center',
    alignItems: 'center',
  },
  opCard: {
    height: 65,
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowColor: theme.PRIMARY_COLOR,
    elevation: 3,
    borderRadius: theme.BORDER_IMAGE,
    backgroundColor: theme.WHITE_COLOR,
  },
  opText: {
    paddingVertical: 9,
    color: theme.TERTIARY_COLOR,
    fontSize: theme.FONT_SIZE_SMALL + 1,
  },
  transContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  transIcon: {
    backgroundColor: theme.TERTIARY_COLOR,
    height: 50,
    width: 50,
    borderRadius: theme.BORDER_IMAGE,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowColor: theme.PRIMARY_COLOR,
    elevation: 3,
  },
  transPurpose: {
    marginRight: 'auto',
    marginLeft: 10,
  },
  transTitle: {
    fontSize: theme.FONT_SIZE_SMALL + 1,
    color: theme.TERTIARY_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  transDate: {
    fontSize: theme.FONT_SIZE_SMALL,
  },
  transDebit: {
    backgroundColor: theme.TERTIARY_COLOR + 'bc',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: theme.BORDER_IMAGE - 3,
  },
  transDebitText: {
    fontSize: theme.FONT_SIZE_SMALL - 1,
    color: theme.WHITE_COLOR,
  },
  transactionContainer: {
    paddingBottom: 30,
  },
});

export default styles;
