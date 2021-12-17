import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.WHITE_COLOR,
    marginTop: 30,
  },
  editProfileContainer: {
    paddingVertical: 15,
    backgroundColor: theme.WHITE_COLOR,
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.LIGHT_GREY,
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 3,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  editProfile: {
    textAlign: 'center',
    letterSpacing: 0.8,
    color: theme.TERTIARY_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  profileContainer: {
    flex: 1,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 65,
    marginHorizontal: 8,
  },
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  imageContainer: {
    height: 60,
    width: 60,
    backgroundColor: theme.WHITE_COLOR,
    borderRadius: theme.LARGE_BORDER_RADIUS,
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.LIGHT_GREY,
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 3,
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: theme.LARGE_BORDER_RADIUS,
    resizeMode: 'cover',
  },
  profileEditImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    marginLeft: -17,
    zIndex: 9999,
    backgroundColor: theme.WHITE_COLOR,
    borderRadius: theme.LARGE_BORDER_RADIUS,
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.LIGHT_GREY,
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 3,
  },
  editInstructions: {
    width: 280,
    paddingLeft: 3,
    fontSize: theme.FONT_SIZE_SMALL + 1,
    color: theme.LIGHT_GREY,
  },
  userInfoContainer: {
    paddingHorizontal: 8,
    marginTop: 25,
  },
  userInfo: {
    fontSize: theme.FONT_SIZE_NORMAL + 2,
    color: theme.TERTIARY_COLOR,
  },
  inputContainer: {
    marginTop: 10,
  },
  changePasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderColor: theme.DARK_GREY,
    paddingBottom: 6,
  },
  changePasswordText: {
    fontSize: theme.FONT_SIZE_NORMAL - 2,
    paddingHorizontal: 8,
    paddingVertical: 4,
    color: theme.DARK_GREY,
  },
});

export default styles;
