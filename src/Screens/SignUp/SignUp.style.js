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
    resizeMode: 'cover',
  },
  welcomeText: {
    fontSize: theme.FONT_SIZE_EXTRA_LARGE - 2,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    color: theme.PRIMARY_COLOR,
    marginBottom: 25,
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: theme.DARK_OVERLAYS + '37',
  },
  logoImage: {
    width: 120,
    height: 50,
    tintColor: theme.WHITE_COLOR,
    alignSelf: 'flex-end',
  },
  welcomeContainer: {
    alignSelf: 'flex-end',
    marginBottom: 120,
    width: 130,
  },
  welcomeTitle: {
    fontSize: theme.FONT_SIZE_LARGE,
    textAlign: 'center',
    letterSpacing: 6,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    color: theme.PRIMARY_COLOR,
  },
  welcomeSlogan: {
    textAlign: 'center',
    color: theme.WHITE_COLOR,
    fontSize: theme.FONT_SIZE_EXTRA_SMALL,
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
  gradientButton: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
    borderRadius: theme.LARGE_BORDER_RADIUS,
    padding: 13,
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.LIGHT_GREY,
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 3,
  },
  gradientButtonText: {
    color: theme.WHITE_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  forgotPasswordText: {
    fontWeight: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_EXTRA_SMALL,
    textAlign: 'center',
    color: theme.LIGHT_GREY,
    marginBottom: 25,
  },
  forgotContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  inputsContainer: {
    marginTop: -40,
    paddingTop: 55,
    paddingHorizontal: 25,
    backgroundColor: theme.WHITE_COLOR,
    borderTopLeftRadius: theme.LARGE_BORDER_RADIUS,
    borderTopRightRadius: theme.LARGE_BORDER_RADIUS,
  },
  loginText: {
    color: theme.SECONDARY_COLOR,
    fontSize: theme.FONT_SIZE_EXTRA_SMALL,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
});

export default styles;
