import {ADD_TODO, DEL_TODO} from './actionTypes';

export const createTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

export const deleteTodo = (id) => {
  return {
    type: DEL_TODO,
    payload: id
  }
}
