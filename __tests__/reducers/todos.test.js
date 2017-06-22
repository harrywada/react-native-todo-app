import {List} from 'immutable';

import {todos} from '../../src/reducers/todos';
import {ADD_TODO, DEL_TODO} from '../../src/actions/actionTypes';

test('properly adds todo item', () => {
  var state = List();
  var action = {
    type: ADD_TODO,
    payload: 'test1'
  };

  var result = List([
    {id: 0, todo: 'test1'},
    ...state
  ])

  expect(todos(state, action)).toEqual(result);

  var state = result;
  var action = {
    type: ADD_TODO,
    payload: 'test2'
  };

  var result = List([
    {id: 1, todo: 'test2'},
    ...state
  ]);

  expect(todos(state, action)).toEqual(result);
});

test('properly removes todo item', () => {
  var state = List([
    {id: 1, todo: 'test2'},
    {id: 0, todo: 'test1'}
  ]);
  var action = {
    type: DEL_TODO,
    payload: 0
  };

  var result = List([{id: 1, todo: 'test2'}]);

  expect(todos(state, action)).toEqual(result);
});

test('removing last item returns empty array', () => {
  var state = List([{id: 0, todo: 'test'}]);
  var action = {
    type: DEL_TODO,
    payload: 0
  };

  var result = List();

  expect(todos(state, action)).toEqual(result);
});
