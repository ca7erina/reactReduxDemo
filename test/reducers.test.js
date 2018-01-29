import deepFreeze from 'deep-freeze';
import todoReducer from '../src/reducers/todos';
import * as types from '../src/constants/Todo';

describe('test reducers are pure', () => {
  it('todoReducer should be pure', () => {
    const state1 = [{
      text: 'Use Redux',
      completed: false,
      id: 0,
    }];
    const action1 = {
      type: types.ADD_TODO,
      text: 'Run the tests',
      id: 1,
    };

    deepFreeze(state1);
    deepFreeze(action1);

    expect(todoReducer(state1, action1)).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
      {
        text: 'Run the tests',
        completed: false,
        id: 1,
      },
    ]);
  });
});

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(todoReducer(undefined, {})).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
    ]);
  });

  it('should handle ADD_TODO', () => {
    expect(todoReducer([], {
      type: types.ADD_TODO,
      text: 'Run the tests',
      id: 0,
    })).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0,
      },
    ]);
  });
});
