import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    marginHorizontal: 12,
    flexDirection: 'row',
    marginVertical: 7.5,
    borderRadius: theme.BORDER_IMAGE,
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.SECONDARY_COLOR,
    shadowRadius: 8,
    shadowOpacity: 0.8,
    elevation: 3,
    backgroundColor: theme.WHITE_COLOR,
  },
  cardImageContainer: {},
  cardImage: {
    borderRadius: theme.BORDER_IMAGE,
    height: 100,
    width: 100,
  },
  infoContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 4,
  },
  cardDetails: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 2,
  },
  cardDetail: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginLeft: 2,
  },
  cardControls: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
  },
  cardPastryName: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.TERTIARY_COLOR,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  amount: {
    fontSize: theme.FONT_SIZE_SMALL,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    color: theme.DARK_GREY,
    marginRight: 2,
  },
  quantity: {
    marginHorizontal: 16,
    fontSize: theme.FONT_SIZE_SMALL,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },

  actionButton: {
    height: 30,
    width: 30,
    backgroundColor: theme.SECONDARY_COLOR,
    borderRadius: theme.CIRCLE_BORDER_RADIUS,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.LIGHT_GREY,
    shadowRadius: 8,
    shadowOpacity: 0.6,
    elevation: 3,
  },
  trashButton: {
    height: 30,
    width: 30,
    backgroundColor: theme.DANGER_COLOR,
    borderRadius: theme.CIRCLE_BORDER_RADIUS,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowColor: theme.LIGHT_GREY,
    shadowRadius: 8,
    shadowOpacity: 0.6,
    elevation: 3,
  },
});

export default styles;
