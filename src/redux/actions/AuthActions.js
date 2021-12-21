import {SET_USER, SET_TOKEN, RESET, ENTRY, SET_CHEFS} from '../types';

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
