import {StyleSheet, useWindowDimensions} from 'react-native';
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
    backgroundColor: theme.WHITE_COLOR,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowColor: theme.LIGHT_GREY,
    shadowRadius: 8,
    elevation: 2,
    position: 'absolute',
    backfaceVisibility: 'hidden',
  },
  tabTab: {
    justifyContent: 'center',
    width: 55,
    alignItems: 'center',
  },
  tabTabText: {
    fontSize: 8,
    color: theme.LIGHT_GREY,
    fontWeight: '700',
  },
  tabTabTextSelected: {
    fontSize: 8,
    color: theme.PRIMARY_COLOR,
    fontWeight: '700',
  },
});

export default styles;
