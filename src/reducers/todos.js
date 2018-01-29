import todo from './todo';
import { ADD_TODO } from '../constants/Todo';

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, // items from the old array
        todo(undefined, action),
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export default todos;
