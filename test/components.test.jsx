import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Todo from '../src/components/reduxDemo/Todo';

Enzyme.configure({ adapter: new Adapter() });

const TODO_TEXT = 'read a book';

function setup() {
  const props = {
    onClick: jest.fn(),
    completed: false,
    text: TODO_TEXT,
  };
  const enzymeWrapper = mount(<Todo {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('components test', () => {
  describe('test Todo component', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('div').hasClass('todoItems')).toBe(true);
      expect(enzymeWrapper.text()).toEqual(TODO_TEXT);
      expect(enzymeWrapper.find('div').get(0).props.style).toHaveProperty('textDecoration', 'none');
    });

    it('should call onclick function if it is clicked', () => {
      const { enzymeWrapper, props } = setup();
      expect(props.onClick.mock.calls.length).toBe(0);
      enzymeWrapper.find('div').simulate('click');
      expect(props.onClick.mock.calls.length).toBe(1);
    });
  });
});
