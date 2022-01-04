import {
  ADD_ALL_DISLIKES,
  ADD_ALL_LIKES,
  ADD_DISLIKES,
  ADD_LIKES,
  ADD_TO_FAVOURITE,
  DELETE_FROM_FAVOURITE,
} from '../types';

export const addToFavourites = (item) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: item,
  };
};

export const addLikes = (item) => {
  return {
    type: ADD_LIKES,
    payload: item,
  };
};

export const addDislikes = (item) => {
  return {
    type: ADD_DISLIKES,
    payload: item,
  };
};

export const addAllLikes = (item) => {
  return {
    type: ADD_ALL_LIKES,
    payload: item,
  };
};

export const addAllDislikes = (item) => {
  return {
    type: ADD_ALL_DISLIKES,
    payload: item,
  };
};

export const deleteFromFavourites = (id) => {
  return {
    type: DELETE_FROM_FAVOURITE,
    payload: id,
  };
};
