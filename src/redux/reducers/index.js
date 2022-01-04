import {combineReducers} from 'redux';

import AuthReducer from './AuthReducers';
import ScrollReducers from './ScrollReducers';
import TranslationReducer from './TranslationReducer';
import CartReducer from './CartReducer';
import FavouriteReducer from './FavouritesReducer';

export default combineReducers({
  auth: AuthReducer,
  scroll: ScrollReducers,
  i18n: TranslationReducer,
  cart: CartReducer,
  favourites: FavouriteReducer,
});
