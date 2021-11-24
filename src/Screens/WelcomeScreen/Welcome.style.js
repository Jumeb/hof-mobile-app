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
    resizeMode: 'contain',
    flex: 1,
    justifyContent: 'center',
  },
  welcomeImageStyle: {
    borderBottomLeftRadius: theme.LARGE_BORDER_RADIUS,
    borderBottomRightRadius: theme.LARGE_BORDER_RADIUS,
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 10,
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
    letterSpacing: 3.4,
    fontWeight: '700',
    color: theme.WHITE_COLOR,
  },
  welcomeSlogan: {
    textAlign: 'center',
    color: theme.WHITE_COLOR,
  },
  welcomeInfo: {
    alignSelf: 'center',
  },
  welcomeInfoText: {
    color: theme.FAINT_GREY,
    textAlign: 'center',
    fontWeight: '700',
  },
  welcomeIcon: {
    alignSelf: 'center',
    marginBottom: 50,
  },
  welcomeIconText: {
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
});

export default styles;
