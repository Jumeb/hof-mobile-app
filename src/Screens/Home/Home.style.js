import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.WHITE_COLOR,
    marginTop: 30,
  },
  chefsContainer: {
    marginBottom: 2,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 9,
  },
  topChefText: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.DARK_GREY,
    marginVertical: 5,
    paddingHorizontal: 6,
  },
  chefText: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.DARK_GREY,
    marginVertical: 15,
    paddingHorizontal: 6,
  },
  listStyle: {
    paddingTop: 10,
  },
  footerStyle: {
    width: 20,
  },
  columnWrapperStyle: {
    justifyContent: 'space-around',
  },
  sorryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sorryImage: {
    resizeMode: 'contain',
    height: 60,
    tintColor: theme.PRIMARY_COLOR,
    marginVertical: 10,
  },
  sorryText: {
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.TERTIARY_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    letterSpacing: 0.7,
    textAlign: 'center',
  },
});

export default styles;
