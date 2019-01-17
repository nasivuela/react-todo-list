import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import './TodoList.css'

class TodoList extends Component {
  render() {
    const { todos, onRemoveTodo } = this.props;

    return (
      <ul className='TodoList'>
        {todos.map(todo => (
          <li className="TodoList__item">
            <Todo
              todo={todo}
              onRemoveTodo={onRemoveTodo}
            />
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
