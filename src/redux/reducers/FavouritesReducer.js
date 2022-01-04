import {Storage} from '../../utils';
import {
  ADD_ALL_DISLIKES,
  ADD_ALL_LIKES,
  ADD_DISLIKES,
  ADD_LIKES,
  ADD_TO_FAVOURITE,
} from '../types';

const INITIAL_STATE = {
  favourites: [],
  likes: [],
  dislikes: [],
};

export default (state = INITIAL_STATE, action) => {
  let favourites, likes, dislikes, _likes, _dislikes, indexL, indexD;
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      favourites = action.payload;
      Storage.storeInfo('FAVOURITES', favourites);
      return {...state, favourites: favourites.pastries};
    case ADD_ALL_LIKES:
      likes = action.payload;
      Storage.storeInfo('LIKES', likes);
      return {...state, likes};
    case ADD_ALL_DISLIKES:
      dislikes = action.payload;
      Storage.storeInfo('DISLIKES', dislikes);
      return {...state, dislikes};
    case ADD_LIKES:
      likes = action.payload;
      _likes = [...state.likes];
      // console.log(_likes);
      _dislikes = [...state.dislikes];
      indexL = state.likes.findIndex(
        (like) => like.toString() === likes.toString(),
      );
      indexD = state.dislikes.findIndex(
        (dislike) => dislike.toString() === likes.toString(),
      );
      if (indexL >= 0) {
        _likes.splice(indexL, 1);
      }
      if (indexD >= 0) {
        _dislikes.splice(indexD, 1);
      }
      if (indexL < 0) {
        _likes.push(likes);
      }
      // console.log(indexL);
      return {...state, likes: [..._likes], dislikes: [..._dislikes]};
    case ADD_DISLIKES:
      dislikes = action.payload;
      _likes = [...state.likes];
      _dislikes = [...state.dislikes];
      // console.log(_dislikes, 'shoe');
      indexL = state.likes.findIndex((like) => {
        return like.toString() === dislikes.toString();
      });
      indexD = state.dislikes.findIndex((dislike) => {
        return dislike.toString() === dislikes.toString();
      });
      if (indexL >= 0) {
        _likes.splice(indexL, 1);
      }
      if (indexD >= 0) {
        _dislikes.splice(indexD, 1);
      }
      if (indexD < 0) {
        _dislikes.push(dislikes);
      }
      // console.log(_dislikes, indexD);
      // console.log(indexD);
      return {...state, likes: [..._likes], dislikes: [..._dislikes]};

    default:
      return state;
  }
};
