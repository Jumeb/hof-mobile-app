import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.LIGHT_GREY,
    shadowRadius: 8,
    shadowOpacity: 0.8,
    elevation: 3,
    marginHorizontal: 9,
  },
  bestContainer: {
    width: 290,
    borderWidth: 1.8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  bestBackground: {
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  pastryName: {
    fontSize: theme.FONT_SIZE_LARGE - 6,
    padding: 5,
    textAlign: 'left',
    color: theme.DARK_GREY,
    fontWeight: '700',
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
  bestDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
});

export default styles;
