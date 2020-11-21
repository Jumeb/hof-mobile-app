import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  userProfile: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  userImage: {
    height: 80,
    width: 80,
    borderRadius: 55,
    borderWidth: 1.8,
    borderColor: theme.primary_color,
    marginBottom: 4,
  },
  userName: {
    fontSize: theme.font_size_normal,
    fontWeight: '700',
    letterSpacing: 1.3,
    color: theme.dark_grey,
  },
  userNumber: {
    fontSize: theme.font_size_extra_small,
    letterSpacing: 1,
  },
  separator: {
    marginHorizontal: -8,
    height: 0.9,
    backgroundColor: theme.light_grey,
  },
});

export default styles;
