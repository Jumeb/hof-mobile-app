import {StyleSheet} from 'react-native';

import colorTheme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  appLogo: {
    height: 170,
    width: 170,
    tintColor: colorTheme.WHITE_COLOR,
    alignSelf: 'center',
  },
  madeText: {
    textAlign: 'center',
    padding: 12,
    fontSize: 18,
    color: colorTheme.WHITE_COLOR,
    fontWeight: '800',
    fontFamily: 'old-english-text-mt',
  },
});

export default styles;
