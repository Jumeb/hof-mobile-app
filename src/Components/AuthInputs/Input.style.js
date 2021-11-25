import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 30,
  },
  inputContainer: {
    borderBottomWidth: 1.5,
    borderBottomColor: theme.LIGHT_GREY,
  },
  inputContainerError: {
    borderBottomWidth: 1.5,
    borderBottomColor: theme.DANGER_COLOR + '88',
  },
  inputText: {
    textAlign: 'left',
    fontSize: theme.FONT_SIZE_NORMAL - 2,
    color: theme.LIGHT_GREY,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  inputError: {
    color: theme.DANGER_COLOR,
    textAlign: 'left',
    marginBottom: -5,
  },
});

export default styles;
