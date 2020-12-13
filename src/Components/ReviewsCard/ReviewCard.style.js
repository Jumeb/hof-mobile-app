import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
    position: 'absolute',
    bottom: 10,
  },
  textInputContainer: {
    flex: 1,
    marginHorizontal: 5,
    borderBottomWidth: 2,
    borderBottomColor: theme.primary_color,
    backgroundColor: theme.white_color,
    paddingVertical: 2,
    borderRadius: 4,
    paddingHorizontal: 5,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowColor: theme.dark_grey,
    shadowRadius: 4,
    elevation: 3,
  },
  textInputField: {
    padding: 0,
    maxHeight: 50,
  },
  reviewButtons: {
    height: 33,
    width: 33,
    marginHorizontal: 3,
    backgroundColor: theme.white_color,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderBottomWidth: 2,
    borderBottomColor: theme.primary_color,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowColor: theme.dark_grey,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default styles;
