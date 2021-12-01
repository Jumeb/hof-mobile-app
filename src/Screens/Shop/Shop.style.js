import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.WHITE_COLOR,
    marginTop: 32,
  },
  varietyText: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.DARK_GREY,
    marginVertical: 15,
    paddingHorizontal: 6,
  },
  pastriesContainer: {
    marginTop: 40,
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
  pastriesLayout: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  pastriesLayoutButton: {
    marginLeft: 10,
  },
  spacer: {
    width: 35,
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
});

export default styles;
