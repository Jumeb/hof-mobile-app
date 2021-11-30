import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 8,
    marginBottom: 5,
    width: 210,
    borderRadius: theme.BORDER_IMAGE,
    overflow: 'hidden',
    backgroundColor: theme.WHITE_COLOR,
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.LIGHT_GREY,
    shadowRadius: 8,
    shadowOpacity: 0.8,
    elevation: 3,
  },
  bestContainer: {
    flex: 1,
    paddingVertical: 10,
  },
  bestBackground: {
    height: 250,
  },
  chefRank: {
    color: theme.WHITE_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_SMALL - 1,
    marginBottom: -1,
  },
  chefName: {
    fontSize: theme.FONT_SIZE_LARGE + 2,
    letterSpacing: 1,
    textAlign: 'left',
    color: theme.WHITE_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  chefLikes: {
    fontSize: theme.FONT_SIZE_EXTRA_SMALL,
    marginLeft: 8,
    color: theme.WHITE_COLOR,
  },
  likesContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 6,
    flexDirection: 'row',
  },
  bestDetail: {
    paddingHorizontal: 10,
    marginTop: 'auto',
  },
  bestInfo: {
    paddingHorizontal: 10,
    marginBottom: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bestInfoButton: {
    textAlign: 'right',
  },
  logo: {
    height: 25,
    width: 25,
    tintColor: theme.SECONDARY_COLOR,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
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
  shopSign: {
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
});

export default styles;
