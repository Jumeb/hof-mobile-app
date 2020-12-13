import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  sentContainer: {
    maxWidth: '77%',
    marginLeft: 'auto',
    marginRight: 5,
    borderColor: theme.primary_color,
    borderWidth: 1,
    marginVertical: 5,
    backgroundColor: theme.white_color,
    borderRadius: 4,
    position: 'relative',
  },
  receiveContainer: {
    maxWidth: '77%',
    marginRight: 'auto',
    marginLeft: 5,
    borderColor: theme.secondary_color,
    borderWidth: 1,
    marginVertical: 5,
    backgroundColor: theme.white_color,
    borderRadius: 4,
    position: 'relative',
  },
  reviewText: {
    color: theme.dark_grey,
    fontSize: theme.font_size_small + 1,
    lineHeight: 20,
  },
  reviewImage: {
    height: 200,
    width: 275,
    borderRadius: 4,
  },
});

export default styles;
