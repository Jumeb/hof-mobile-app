import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.WHITE_COLOR,
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
    resizeMode: 'contain',
    width: 120,
    height: 60,
    tintColor: theme.WHITE_COLOR,
    alignSelf: 'flex-end',
  },
  welcomeContainer: {
    alignSelf: 'flex-end',
    marginBottom: 30,
    width: 130,
  },
  welcomeTitle: {
    fontSize: theme.FONT_SIZE_LARGE,
    textAlign: 'center',
    letterSpacing: 3,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    color: theme.PRIMARY_COLOR,
  },
  welcomeSlogan: {
    textAlign: 'center',
    color: theme.WHITE_COLOR,
    fontSize: theme.FONT_SIZE_EXTRA_SMALL,
  },
  Button: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 25,
    borderWidth: 2,
    borderColor: theme.PRIMARY_COLOR,
    borderRadius: theme.LARGE_BORDER_RADIUS,
    padding: 10,
  },
  ButtonText: {
    color: theme.PRIMARY_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  forgotPasswordText: {
    fontWeight: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_EXTRA_SMALL,
    textAlign: 'center',
    color: theme.LIGHT_GREY,
  },
  inputsContainer: {
    marginTop: -40,
    paddingTop: 55,
    paddingHorizontal: 25,
    backgroundColor: theme.WHITE_COLOR,
    borderTopLeftRadius: theme.LARGE_BORDER_RADIUS,
    borderTopRightRadius: theme.LARGE_BORDER_RADIUS,
  },
  gradient: {
    marginTop: 45,
    borderRadius: theme.LARGE_BORDER_RADIUS,
    marginBottom: 20,
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.LIGHT_GREY,
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 3,
    overflow: 'hidden',
  },
  gradientButton: {
    flex: 1,
    alignItems: 'center',
    padding: 13,
  },
  gradientButtonText: {
    color: theme.WHITE_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
});

export default styles;
