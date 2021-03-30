import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.faint_grey,
  },
  pastriesContainer: {
    marginBottom: 2,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  pastriesText: {
    fontSize: theme.font_size_large,
    color: theme.dark_grey,
    marginVertical: 8,
    paddingHorizontal: 15,
  },
});

export default styles;
