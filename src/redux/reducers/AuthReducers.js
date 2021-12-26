import {
  SET_USER,
  SET_TOKEN,
  RESET,
  ENTRY,
  SET_CHEFS,
  SET_ITEMS,
} from '../types';

const INITIAL_STATE = {
  token: '',
  user: {},
  chefs: [],
  firstTime: true,
  items: [],
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      const user = action.payload;
      return {...state, user: {...user}};
    case SET_CHEFS:
      const chefs = action.payload;
      return {...state, chefs: [...chefs]};
    case SET_ITEMS:
      const items = action.payload;
      return {...state, items};
    case SET_TOKEN:
      const token = action.payload;
      return {...state, token};
    case ENTRY:
      return {...state, firstTime: false};
    case RESET:
      return {...state, user: {}, token: '', bakerId: ''};
    default:
      return state;
  }
};

export default AuthReducer;
