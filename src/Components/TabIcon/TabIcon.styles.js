import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  tabTab: {
    justifyContent: 'center',
    width: 55,
    alignItems: 'center',
  },
  tabTabText: {
    fontSize: 8,
    color: theme.LIGHT_GREY,
    fontWeight: '700',
  },
  tabTabTextSelected: {
    fontSize: 8,
    color: theme.PRIMARY_COLOR,
    fontWeight: '700',
  },
});

export default styles;
