import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  sentContainer: {
    maxWidth: '77%',
    marginLeft: 'auto',
    marginRight: 5,
    borderColor: theme.PRIMARY_COLOR,
    borderWidth: 1,
    marginVertical: 5,
    backgroundColor: theme.WHITE_COLOR,
    borderRadius: 4,
    position: 'relative',
  },
  receiveContainer: {
    maxWidth: '77%',
    marginRight: 'auto',
    marginLeft: 5,
    borderColor: theme.SECONDARY_COLOR,
    borderWidth: 1,
    marginVertical: 5,
    backgroundColor: theme.WHITE_COLOR,
    borderRadius: 4,
    position: 'relative',
  },
  reviewText: {
    color: theme.DARK_GREY,
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
