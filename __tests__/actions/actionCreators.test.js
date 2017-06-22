import {createTodo, deleteTodo} from '../../src/actions/actionCreators';
import {ADD_TODO, DEL_TODO} from '../../src/actions/actionTypes';

test('properly creates ADD_TODO actions', () => {
  var todo = 'test1';

  var result = {
    type: ADD_TODO,
    payload: 'test1'
  };

  expect(createTodo(todo)).toEqual(result);
});

test('properly creates DEL_TODO actions', () => {
  var index = 0;

  var result = {
    type: DEL_TODO,
    payload: 0
  };

  expect(deleteTodo(index)).toEqual(result);
});
