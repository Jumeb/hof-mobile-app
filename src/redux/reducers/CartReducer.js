import {Storage} from '../../utils';
import {
  ADD_CARTOBJ,
  ADD_MULTIPLE_TO_CART,
  ADD_TO_CART,
  DELETE_ALL_FROM_CART,
  DELETE_FROM_CART,
} from '../types';

const INITIAL_STATE = {
  cart: [],
  cartObj: {},
};

export default (state = INITIAL_STATE, action) => {
  let cart, cartObj;
  switch (action.type) {
    case ADD_TO_CART:
      cart = action.payload;
      Storage.storeInfo('CART', cart);
      return {...state, cart};
    case ADD_CARTOBJ:
      cartObj = action.payload;
      return {...state, cartObj};
    case DELETE_FROM_CART:
      const id = action.payload;
      cart = [...state.cart];

      let index = cart.findIndex((p) => p.id === id);

      if (index >= 0) {
        cart.splice(index, 1);
      }

      Storage.storeInfo('CART', cart);
      return {...state, cart};
    case ADD_MULTIPLE_TO_CART:
      const products = action.payload;
      cart = [...state.cart];

      products.map((p) => cart.push(p));

      return {...state, cart};
    case DELETE_ALL_FROM_CART:
      const _cart = [];

      Storage.storeInfo('CART', _cart);
      return {...state, cart: _cart};
    default:
      return state;
  }
};
