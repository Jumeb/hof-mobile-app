import {SCROLL} from '../types';

const INITIAL_STATE = {
  scrolling: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SCROLL:
      const scrolling = action.payload;
      return {...state, scrolling};
    default:
      return {...state};
  }
};
