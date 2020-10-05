import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 25,
  },
  inputContainer: {
    borderBottomWidth: 1.5,
    marginHorizontal: 14,
    borderBottomColor: theme.white_color + '88',
  },
  inputContainerError: {
    borderBottomWidth: 1.5,
    marginHorizontal: 14,
    borderBottomColor: theme.danger_color + '88',
  },
  inputText: {
    textAlign: 'center',
    fontSize: theme.font_size_normal,
    color: theme.white_color,
  },
  inputError: {
    color: theme.danger_color,
    textAlign: 'center',
  },
});

export default styles;
