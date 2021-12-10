import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.WHITE_COLOR,
    marginTop: 30,
  },
  settings: {},
  settingsContainer: {
    marginBottom: 2,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 9,
  },
  settingsText: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.DARK_GREY,
    marginVertical: 5,
    paddingHorizontal: 6,
  },
  userProfile: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 42,
  },
  userImage: {
    height: 130,
    width: 130,
    borderRadius: 70,
    borderWidth: 1.8,
    borderColor: theme.FAINT_GREY,
  },
  userImageBorder: {
    height: 137,
    width: 137,
    borderWidth: 2.5,
    borderColor: theme.PRIMARY_COLOR,
    marginBottom: 4,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
  },
  userName: {
    fontSize: theme.FONT_SIZE_SMALL - 1,
    fontWeight: '700',
    letterSpacing: 1.3,
    color: theme.DARK_OVERLAYS,
    marginTop: -20,
  },
  userNumber: {
    fontSize: theme.FONT_SIZE_EXTRA_SMALL - 1,
    letterSpacing: 0.2,
    marginVertical: 3,
  },
  editProfile: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.WHITE_COLOR,
    borderRadius: 50,
    marginTop: -35,
  },
  editProfileIcon: {
    marginTop: -8,
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
    borderWidth: 0.8,
    marginVertical: 2,
    borderColor: theme.TERTIARY_COLOR,
  },
});

export default styles;
