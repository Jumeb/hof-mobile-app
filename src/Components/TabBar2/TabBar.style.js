import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  tabBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 25,
    backgroundColor: theme.white_color,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowColor: theme.light_grey,
    shadowRadius: 8,
    elevation: 2,
    position: 'absolute',
    bottom: 10,
  },
  tabTab: {
    justifyContent: 'center',
    width: 55,
    alignItems: 'center',
  },
  tabTabText: {
    fontSize: 8,
    color: theme.light_grey,
    fontWeight: '700',
  },
  tabTabTextSelected: {
    fontSize: 8,
    color: theme.primary_color,
    fontWeight: '700',
  },
});

export default styles;
