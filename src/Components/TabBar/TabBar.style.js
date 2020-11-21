import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 0,
    marginBottom: 0,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: theme.white_color,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowColor: theme.light_grey,
    shadowRadius: 8,
    elevation: 2,
  },
  tabTab: {
    justifyContent: 'center',
    width: 55,
    alignItems: 'center',
  },
  tabTabSelected: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.primary_color,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: -15,
    width: 55,
  },
  tabTabText: {
    fontSize: 8,
    color: theme.light_grey,
    fontWeight: '700',
  },
  tabTabTextSelected: {
    fontSize: 8,
    color: theme.white_color,
    fontWeight: '700',
  },
});

export default styles;
