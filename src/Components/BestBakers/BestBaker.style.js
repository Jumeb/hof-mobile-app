import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 8,
    paddingVertical: 8,
  },
  bestContainer: {
    width: 290,
    borderWidth: 1.8,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: theme.white_color,
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.light_grey,
    shadowRadius: 8,
    shadowOpacity: 0.8,
    elevation: 3,
  },
  bestBackground: {
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  pastryName: {
    fontSize: theme.font_size_large - 6,
    padding: 5,
    textAlign: 'left',
    color: theme.dark_grey,
    fontWeight: '700',
  },
  pastryLikes: {
    fontSize: 14,
    marginLeft: 8,
  },
  likesContainer: {
    justifyContent: 'space-around',
    alignItems: 'baseline',
    paddingHorizontal: 6,
    flexDirection: 'row',
  },
  bestDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  logo: {
    height: 30,
    width: 30,
    tintColor: theme.white_color,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 3,
    marginHorizontal: 10,
  },
});

export default styles;
