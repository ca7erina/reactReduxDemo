import deepFreeze from 'deep-freeze';
import * as actions from '../src/actions/index';
import * as types from '../src/constants/Todo';


describe('test pure functions', () => {
  it('addTodo should be pure', () => {
    const text = 'text will not be changed';
    const expectedAction = {
      id: 1,
      type: types.ADD_TODO,
      text,
    };
    deepFreeze(text);
    expect(actions.addTodo(text)).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs';
    const expectedAction = {
      id: 2,
      type: types.ADD_TODO,
      text,
    };
    expect(actions.addTodo(text)).toEqual(expectedAction);
  });
});
