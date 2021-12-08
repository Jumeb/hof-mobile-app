import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.WHITE_COLOR,
    marginTop: 30,
  },
  tabBarContainer: {
    marginVertical: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  tabBarTitle: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.DARK_GREY,
    marginVertical: 5,
    paddingHorizontal: 6,
  },
  tabViewContainer: {
    marginTop: 10,
  },
  spacer: {
    width: 35,
  },
});

export default styles;
