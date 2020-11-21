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
    color: theme.light_grey,
    fontWeight: '700',
  },
  tabTabTextSelected: {
    fontSize: 8,
    color: theme.primary_color,
    fontWeight: '700',
  },
});

export default styles;
