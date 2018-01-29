import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import VisibleTodoList from '../src/containers/VisibleTodoList';
import TodoList from '../src/components/reduxDemo/TodoList';
import Todo from '../src/components/reduxDemo/Todo';

Enzyme.configure({ adapter: new Adapter() });

describe('containers test', () => {
  describe('VisibleTodoList container test', () => {
    let enzymeWrapper;
    let store;
    let todoComponent;
    beforeEach(() => {
      const testState = {
        todos: [{ text: 'Use Redux', completed: false, id: 0 }, { text: 'Study Redux', completed: true, id: 1 }],
        VisibilityFilter: 'SHOW_ALL',
      };
      const mockStore = configureStore();
      store = mockStore(testState);
      store.dispatch = jest.fn();
      enzymeWrapper = mount(<Provider store={store}><VisibleTodoList /></Provider>);
      todoComponent = enzymeWrapper.find(VisibleTodoList).find(TodoList).find(Todo);
    });

    it('should render two todo items.', () => {
      expect(todoComponent).toHaveLength(2);
    });
  });
});
