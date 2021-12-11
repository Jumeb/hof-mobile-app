import {combineReducers} from 'redux';
import ScrollReducers from './ScrollReducers';
import TranslationReducer from './TranslationReducer';

export default combineReducers({
  auth: () => [],
  scroll: ScrollReducers,
  i18n: TranslationReducer,
});
