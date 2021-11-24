import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainButton: {
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 1.4,
    borderColor: theme.DANGER_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
