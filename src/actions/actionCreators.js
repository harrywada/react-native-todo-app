import {ADD_TODO,
        COMPLETE_TODO,
        DEL_TODO,
        INCOMPLETE_TODO} from './actionTypes';

export const completeTodo = (id) => {
  return {
    type: COMPLETE_TODO,
    payload: id
  }
}

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

export const incompleteTodo = (id) => {
  return {
    type: INCOMPLETE_TODO,
    payload: id
  }
}
