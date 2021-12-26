import {
  ADD_CARTOBJ,
  ADD_MULTIPLE_TO_CART,
  ADD_TO_CART,
  DELETE_ALL_FROM_CART,
  DELETE_FROM_CART,
} from '../types';

export const addToCart = (cart) => {
  return {
    type: ADD_TO_CART,
    payload: cart,
  };
};

export const deleteFromCart = (id) => {
  return {
    type: DELETE_FROM_CART,
    payload: id,
  };
};

export const addCartObj = (obj) => {
  return {
    type: ADD_CARTOBJ,
    payload: obj,
  };
};

export const addMultipleToCart = (products) => {
  return {
    type: ADD_MULTIPLE_TO_CART,
    payload: products,
  };
};

export const emptyCart = () => {
  return {
    type: DELETE_ALL_FROM_CART,
  };
};
