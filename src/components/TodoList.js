import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    const { todos, onRemoveTodo } = this.props;

    return (
      <ul>
        {todos.map(todo => (
          <li>
            <Todo todo={todo} onRemoveTodo={onRemoveTodo} />
          </li>
        ))}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;
