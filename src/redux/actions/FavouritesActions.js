import {ADD_TO_FAVOURITE, DELETE_FROM_FAVOURITE} from '../types';

export const addToFavourites = (item) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: item,
  };
};

export const deleteFromFavourites = (id) => {
  return {
    type: DELETE_FROM_FAVOURITE,
    payload: id,
  };
};
