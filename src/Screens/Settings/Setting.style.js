import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  settings: {
    backgroundColor: theme.faint_grey,
  },
  userImage: {
    height: 60,
    width: 60,
  },
  subMenus: {
    flexDirection: 'row',
    marginHorizontal: 18,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  subMenusText: {
    fontSize: theme.font_size_extra_small + 1,
  },
});

export default styles;
