import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.TERTIARY_COLOR + 'ea',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  welcomeImageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  welcomeImageStyle: {
    resizeMode: 'cover',
    borderBottomLeftRadius: theme.LARGE_BORDER_RADIUS,
    borderBottomRightRadius: theme.LARGE_BORDER_RADIUS,
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: theme.DARK_OVERLAYS + '75',
    borderBottomLeftRadius: theme.LARGE_BORDER_RADIUS,
    borderBottomRightRadius: theme.LARGE_BORDER_RADIUS,
  },
  logoImage: {
    width: 120,
    height: 50,
    tintColor: theme.WHITE_COLOR,
    alignSelf: 'center',
  },
  welcomeContainer: {
    alignSelf: 'center',
    marginTop: 120,
    marginBottom: 120,
    width: 130,
  },
  welcomeTitle: {
    fontSize: theme.FONT_SIZE_LARGE,
    textAlign: 'center',
    letterSpacing: 9,
    fontWeight: '700',
    color: theme.WHITE_COLOR,
  },
  welcomeSlogan: {
    textAlign: 'center',
    color: theme.WHITE_COLOR,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 40,
  },
  Button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ButtonText: {
    marginHorizontal: 6,
    color: theme.WHITE_COLOR,
    fontWeight: '700',
  },
  forgotPasswordText: {
    fontWeight: '700',
    fontSize: theme.FONT_SIZE_EXTRA_SMALL,
    textAlign: 'center',
    color: theme.WHITE_COLOR,
  },
  inputsContainer: {
    marginBottom: 20,
  },
  indicatorIcon: {
    alignSelf: 'center',
    marginBottom: 5,
    marginTop: 40,
  },
});

export default styles;
