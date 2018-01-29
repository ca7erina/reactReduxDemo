import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({
  onClick,
  completed,
  text,
}) => (
  <li>
    <div
      role="button"
      tabIndex="-1"
      className="todoItems"
      onClick={onClick}
      onKeyPress={() => {}}
      style={
        {
          textDecoration: completed ? 'line-through' : 'none',
        }
      }
    >
      {text}
    </div>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
