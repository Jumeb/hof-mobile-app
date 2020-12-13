import {combineReducers} from 'redux';
import ScrollReducers from './ScrollReducers';

export default combineReducers({
  auth: () => [],
  scroll: ScrollReducers,
});
