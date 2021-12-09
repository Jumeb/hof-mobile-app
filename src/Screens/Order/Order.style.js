import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.WHITE_COLOR,
    marginTop: 30,
  },
  tabBarContainer: {
    marginBottom: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  tabTitle: {
    marginTop: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  tabBarTitle: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.DARK_GREY,
    marginVertical: 5,
    paddingHorizontal: 6,
  },
  tabContainer: {
    width: 'auto',
    backgroundColor: theme.WHITE_COLOR,
  },
  scene: {
    backgroundColor: theme.WHITE_COLOR,
    borderRadius: theme.BORDER_IMAGE,
    marginHorizontal: 5,
    overflow: 'hidden',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowColor: theme.DARK_GREY,
    shadowRadius: 8,
    elevation: 6,
  },
  sceneButton: {
    width: 'auto',
    paddingVertical: 5,
    paddingHorizontal: 14,
  },
  sceneButtonText: {
    fontSize: theme.FONT_SIZE_SMALL,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    textAlign: 'center',
  },
  spacer: {
    width: 35,
  },
  renderIndicator: {
    backgroundColor: theme.WHITE_COLOR,
  },
});

export default styles;
