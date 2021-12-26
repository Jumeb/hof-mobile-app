import {
  SET_USER,
  SET_TOKEN,
  RESET,
  ENTRY,
  SET_CHEFS,
  SET_ITEMS,
} from '../types';

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    payload: token,
  };
};

export const setChefs = (chefs) => {
  return {
    type: SET_CHEFS,
    payload: chefs,
  };
};

export const setItems = (items) => {
  return {
    type: SET_ITEMS,
    payload: items,
  };
};

export const setEntry = () => {
  return {
    type: ENTRY,
  };
};

export const resetUser = () => {
  return {
    type: RESET,
  };
};
