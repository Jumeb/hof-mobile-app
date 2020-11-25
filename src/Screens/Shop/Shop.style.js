import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.white_color,
  },
  variety: {
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 8,
  },
  varietyText: {
    fontSize: theme.font_size_large,
    color: theme.dark_grey,
  },
  pastriesContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  pastriesText: {
    fontSize: theme.font_size_large,
    color: theme.dark_grey,
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
