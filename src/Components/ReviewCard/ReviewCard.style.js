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
    borderBottomColor: theme.light_grey,
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
    fontSize: theme.font_size_normal + 4,
    textAlign: 'center',
    color: theme.dark_grey,
  },
  reviewsText: {
    color: theme.light_grey,
    fontSize: theme.font_size_small,
  },
  bakerName: {
    fontSize: theme.font_size_normal + 3,
    textAlign: 'center',
    color: theme.dark_grey,
  },
  bakerCompany: {
    fontSize: theme.font_size_normal - 2,
    color: theme.light_grey,
  },
  reviewStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
