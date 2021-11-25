import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  bakerContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    // justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.8,
    borderBottomColor: theme.LIGHT_GREY,
  },
  bakerImageContainer: {
    height: 75,
    width: 75,
    borderRadius: 50,
    marginBottom: 5,
  },
  bakerImage: {
    height: 72,
    width: 72,
    borderRadius: 50,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  bakerInfo: {},
  reviews: {
    marginLeft: 'auto',
    justifyContent: 'center',
  },
  reviewsNumber: {
    fontSize: theme.FONT_SIZE_NORMAL + 4,
    textAlign: 'center',
    color: theme.DARK_GREY,
  },
  reviewsText: {
    color: theme.LIGHT_GREY,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  bakerName: {
    fontSize: theme.FONT_SIZE_NORMAL + 3,
    textAlign: 'center',
    color: theme.DARK_GREY,
  },
  bakerCompany: {
    fontSize: theme.FONT_SIZE_NORMAL - 2,
    color: theme.LIGHT_GREY,
  },
  reviewStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
