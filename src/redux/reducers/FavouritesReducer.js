import {Storage} from '../../utils';
import {ADD_TO_FAVOURITE} from '../types';

const INITIAL_STATE = {
  favourites: [],
};

export default (state = INITIAL_STATE, action) => {
  let favourites;
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      favourites = action.payload;
      Storage.storeInfo('FAVOURITES', favourites);
      return {...state, favourites};
    default:
      return state;
  }
};
