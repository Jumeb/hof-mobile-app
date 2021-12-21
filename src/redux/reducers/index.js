import {combineReducers} from 'redux';

import AuthReducer from './AuthReducers';
import ScrollReducers from './ScrollReducers';
import TranslationReducer from './TranslationReducer';

export default combineReducers({
  auth: AuthReducer,
  scroll: ScrollReducers,
  i18n: TranslationReducer,
});
