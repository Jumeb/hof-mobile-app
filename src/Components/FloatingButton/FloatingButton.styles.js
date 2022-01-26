import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    bottom: 40,
    right: 8,
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.CIRCLE_BORDER_RADIUS + 88,
    backgroundColor: theme.PRIMARY_COLOR,
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.LIGHT_GREY,
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 2,
  },
});

export default styles;
