import {List} from 'immutable';

import {todos} from '../../src/reducers/todos';
import {createTodo, deleteTodo} from '../../src/actions/actionCreators';

test('properly adds todo item', () => {
  var state = List();
  var action = createTodo('test1');

  var result = List([{id: 0, todo: 'test1'}])

  expect(todos(state, action)).toEqual(result);

  var state = result;
  var action = createTodo('test2');

  var result = List([
    {id: 1, todo: 'test2'},
    {id: 0, todo: 'test1'}
  ]);

  expect(todos(state, action)).toEqual(result);
});

test('properly removes todo item', () => {
  var state = List([
    {id: 1, todo: 'test2'},
    {id: 0, todo: 'test1'}
  ]);
  var action = deleteTodo(0);

  var result = List([{id: 1, todo: 'test2'}]);

  expect(todos(state, action)).toEqual(result);
});

test('removing last item returns empty array', () => {
  var state = List([{id: 0, todo: 'test'}]);
  var action = deleteTodo(0);

  var result = List();

  expect(todos(state, action)).toEqual(result);
});
