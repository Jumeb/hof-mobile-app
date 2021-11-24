import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.WHITE_COLOR,
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
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  pastriesText: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.DARK_GREY,
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
});

export default styles;
