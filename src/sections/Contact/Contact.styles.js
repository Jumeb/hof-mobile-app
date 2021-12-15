import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.TRANSPARENT,
    margin: 0,
    justifyContent: 'flex-end',
  },
  langContainer: {
    borderTopLeftRadius: theme.BORDER_IMAGE + 6,
    borderTopRightRadius: theme.BORDER_IMAGE + 6,
    backgroundColor: theme.WHITE_COLOR,
    paddingHorizontal: 8,
    paddingBottom: 12,
    height: 'auto',
  },
  downIndicator: {
    position: 'absolute',
    top: 0,
    left: '50%',
    paddingTop: 2.5,
    zIndex: 9999,
  },
  title: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.TERTIARY_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    marginBottom: 5,
    marginTop: 12,
  },
  avLang: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 7,
  },
  lang: {
    fontSize: theme.FONT_SIZE_NORMAL,
    color: theme.TERTIARY_COLOR,
    marginLeft: 8,
    marginRight: 'auto',
    // margin: 8,
  },
  loadingLang: {
    marginLeft: 12,
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.SECONESSS_COLOR,
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 80,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: theme.BORDER_IMAGE,
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.LIGHT_GREY,
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 3,
  },
  buttonText: {
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.WHITE_COLOR,
    textAlign: 'center',
  },
  whatsapp: {
    backgroundColor: theme.WHATSAPP,
  },
  twitter: {
    backgroundColor: theme.TWITTER,
  },
  facebook: {
    backgroundColor: theme.FACEBOOK,
  },
  mail: {
    backgroundColor: theme.MAIL,
  },
  link: {
    backgroundColor: theme.LINK,
  },
  call: {
    backgroundColor: theme.SECONDARY_COLOR,
  },
  sms: {
    backgroundColor: theme.SECONESSS_COLOR,
  },
});

export default styles;
