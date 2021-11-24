import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.FAINT_GREY,
  },
  pastriesContainer: {
    marginBottom: 2,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  pastriesText: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.DARK_GREY,
    marginVertical: 8,
    paddingHorizontal: 15,
  },
});

export default styles;
