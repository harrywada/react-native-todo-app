import {ADD_TODO,
        COMPLETE_TODO,
        DEL_TODO,
        INCOMPLETE_TODO} from '../actions/actionTypes';
import {List} from 'immutable';

export const todos = (state = List(), {type, payload}) => {
  switch(type){
    case ADD_TODO:
      var newTodo = {
        complete: false,
        id: state.size,
        todo: payload
      };
      return state.insert(0, newTodo);
    case COMPLETE_TODO:
      var index = state.find((todo) => todo.id === payload);
      return state.update(index, (todo) => ({
        complete: true,
        id: todo.id,
        todo: todo.todo
      }));
    case DEL_TODO:
      return state.filter((todo) => (todo.id !== payload));
    case INCOMPLETE_TODO:
      var index = state.find((todo) => todo.id === payload);
      return state.update(index, (todo) => ({
        complete: false,
        id: todo.id,
        todo: todo.todo
      }));
    default:
      return state;
  }
}
