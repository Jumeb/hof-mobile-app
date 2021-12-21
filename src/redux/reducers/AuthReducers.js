import {SET_USER, SET_TOKEN, RESET, ENTRY, SET_CHEFS} from '../types';

const INITIAL_STATE = {
  token: '',
  user: {},
  chefs: [],
  firstTime: true,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      const user = action.payload;
      return {...state, user: {...user}};
    case SET_CHEFS:
      const chefs = action.payload;
      return {...state, chefs: [...chefs]};
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
