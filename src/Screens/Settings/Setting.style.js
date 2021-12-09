import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  settings: {
    flex: 1,
    backgroundColor: theme.FAINT_GREY,
    marginTop: 30,
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
    fontSize: theme.FONT_SIZE_EXTRA_SMALL + 1,
  },
  separator: {
    marginHorizontal: -8,
    height: 0.6,
    backgroundColor: theme.LIGHT_GREY,
    marginVertical: 1,
  },
});

export default styles;
