import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 25,
  },
  inputContainer: {
    borderBottomWidth: 1.5,
    marginHorizontal: 14,
    borderBottomColor: theme.WHITE_COLOR + '88',
  },
  inputContainerError: {
    borderBottomWidth: 1.5,
    marginHorizontal: 14,
    borderBottomColor: theme.DANGER_COLOR + '88',
  },
  inputText: {
    textAlign: 'center',
    fontSize: theme.font_size_normal,
    color: theme.WHITE_COLOR,
  },
  inputError: {
    color: theme.DANGER_COLOR,
    textAlign: 'center',
  },
});

export default styles;
