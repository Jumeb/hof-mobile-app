import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.light_grey,
    shadowRadius: 8,
    shadowOpacity: 0.8,
    elevation: 3,
    marginHorizontal: 9,
  },
  bestContainer: {
    width: 160,
    borderWidth: 1.8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  bestBackground: {
    height: 105,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderRadius: 8,
  },
  pastryName: {
    fontSize: theme.font_size_normal,
    padding: 5,
    textAlign: 'center',
    color: theme.dark_grey,
  },
  pastryLikes: {
    fontSize: 14,
  },
  likesContainer: {
    marginTop: 'auto',
    marginBottom: 3,
    justifyContent: 'space-around',
    alignItems: 'baseline',
    paddingHorizontal: 6,
    flexDirection: 'row',
    width: 60,
  },
});

export default styles;
