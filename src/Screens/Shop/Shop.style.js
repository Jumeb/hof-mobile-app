import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.WHITE_COLOR,
    marginTop: 32,
  },
  variety: {
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 8,
  },
  varietyText: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.DARK_GREY,
  },
  pastriesContainer: {
    marginBottom: 2,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  topPastries: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.DARK_GREY,
    marginVertical: 5,
    paddingHorizontal: 15,
  },
  pastriesLayout: {
    flexDirection: 'row',
  },
  pastriesLayoutButton: {
    marginLeft: 7,
  },
  paddingContent: {
    paddingHorizontal: 15,
  },
  spacer: {
    width: 35,
  },
  listStyle: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  footerStyle: {
    width: 20,
  },
});

export default styles;
