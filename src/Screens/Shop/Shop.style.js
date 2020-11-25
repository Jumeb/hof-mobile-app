import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 10,
    backgroundColor: theme.primary_color + '11',
  },
  variety: {
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  varietyText: {
    fontSize: theme.font_size_large,
    color: theme.dark_grey,
  },
  pastriesContainer: {
    flexDirection: 'row',
    marginVertical: 25,
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
});

export default styles;
