import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.WHITE_COLOR,
    marginTop: 32,
  },
  chefsContainer: {
    marginBottom: 2,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  topChefText: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.DARK_GREY,
    marginVertical: 5,
    paddingHorizontal: 15,
  },
  chefText: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.DARK_GREY,
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  listStyle: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  footerStyle: {
    width: 20,
  },
  columnWrapperStyle: {
    justifyContent: 'space-around',
  },
});

export default styles;
