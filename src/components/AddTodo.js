import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddTodo.css';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { onAddTodo, value, onNewTodoChange } = this.props;
    return (
      <form onSubmit={onAddTodo}>
        <label className="AddTodo__label" htmlFor="new-todo">New todo</label>
        <input
          className="AddTodo__input"
          onChange={onNewTodoChange}
          value={value}
          type="text"
          id="new-todo"
          name="newTodo"
          placeholder="Organize folders"
        />
      </form>
    );
  }
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired
};

export default AddTodo;
