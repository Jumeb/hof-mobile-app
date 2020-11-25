import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
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
    borderColor: theme.faint_grey,
  },
  userImageBorder: {
    height: 137,
    width: 137,
    borderWidth: 2.5,
    borderColor: theme.primary_color,
    marginBottom: 4,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
  },
  userName: {
    fontSize: theme.font_size_small - 1,
    fontWeight: '700',
    letterSpacing: 1.3,
    color: theme.dark_overlays,
    marginTop: -20,
  },
  userNumber: {
    fontSize: theme.font_size_extra_small - 1,
    letterSpacing: 0.2,
    marginVertical: 3,
  },
  separator: {
    marginHorizontal: -8,
    height: 0.9,
    backgroundColor: theme.light_grey,
  },
  editProfile: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.faint_grey,
    borderRadius: 50,
    marginTop: -35,
  },
  editProfileIcon: {
    marginTop: -8,
  },
  settingsContainer: {
    marginHorizontal: 15,
    paddingTop: 20,
  },
  settingsText: {
    fontSize: theme.font_size_large - 4,
    fontWeight: '300',
    letterSpacing: 0.7,
  },
});

export default styles;
