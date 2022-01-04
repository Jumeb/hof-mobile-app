import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.WHITE_COLOR,
    marginTop: 30,
  },
  pastriesContainer: {
    marginTop: 8,
    marginVertical: 8,
    paddingRight: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  topPastries: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.DARK_GREY,
    marginVertical: 5,
    paddingHorizontal: 6,
  },
  listStyle: {
    paddingTop: 10,
  },
  footerStyle: {
    width: 20,
  },
  varietyText: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.DARK_GREY,
    marginVertical: 15,
    paddingHorizontal: 6,
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
