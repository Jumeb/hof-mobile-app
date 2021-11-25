import {StyleSheet} from 'react-native';
import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 2,
    marginHorizontal: 12,
    flexDirection: 'row',
    marginVertical: 6,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: theme.WHITE_COLOR,
  },
  mainContainer2: {
    width: '46%',
    borderWidth: 2,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: theme.WHITE_COLOR,
    marginVertical: 5,
  },
  pastryImage: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    height: 130,
    width: 140,
  },
  pastryImage2: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 120,
    width: '100%',
  },
  pastryDetails: {
    flex: 1,
    paddingTop: 6,
    paddingBottom: 2,
    marginLeft: 'auto',
  },
  pastryDetails2: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    margin: 'auto',
  },
  pastryName: {
    fontSize: 18,
    color: theme.LIGHT_GREY,
  },
  pastryName2: {
    fontSize: theme.FONT_SIZE_NORMAL,
    color: theme.LIGHT_GREY,
    textAlign: 'center',
    marginVertical: 2,
  },
  likesContainer: {
    flex: 2,
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  likesContainer2: {
    margin: 'auto',
  },
  pastryStats: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'center',
    marginTop: 4,
    justifyContent: 'center',
  },
  pastryStats2: {
    flexDirection: 'row',
    margin: 'auto',
    alignItems: 'baseline',
    marginTop: 4,
  },
  pastryPrice: {
    fontSize: 30,
    color: theme.LIGHT_GREY,
  },
  pastryPrice2: {
    fontSize: 22,
    color: theme.LIGHT_GREY,
  },
  currency: {
    paddingBottom: 3,
    fontSize: 18,
    color: theme.LIGHT_GREY,
  },
  currency2: {
    fontSize: 15,
    color: theme.LIGHT_GREY,
  },
  pastryLikes: {
    color: theme.DARK_GREY,
    fontWeight: '700',
    fontSize: 12,
  },
  pastryLikes2: {
    color: theme.DARK_GREY,
  },
  grid2: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    marginTop: 2,
  },
  pastryIconDetails: {
    flexDirection: 'row',
    marginRight: 12,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default styles;
