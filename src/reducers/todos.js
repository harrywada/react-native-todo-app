import {ADD_TODO} from '../actions/actionTypes';

export const todos = (state = [], {type, payload}) => {
  switch(type){
    case ADD_TODO:
      return [...state, payload];
    default:
      return state;
  }
}
