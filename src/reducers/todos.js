import {ADD_TODO, DEL_TODO} from '../actions/actionTypes';
import {List} from 'immutable';

export const todos = (state = List(), {type, payload}) => {
  switch(type){
    case ADD_TODO:
      var newTodo = {
        id: state.size,
        todo: payload
      };
      return state.insert(0, newTodo);
    case DEL_TODO:
      return state.filter((todo) => (todo.id !== payload));
    default:
      return state;
  }
}
