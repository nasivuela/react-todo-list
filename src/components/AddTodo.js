import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { onAddTodo, value, onNewTodoChange } = this.props;
    return (
      <form onSubmit={onAddTodo}>
        <label htmlFor="new-todo">New todo</label>
        <input
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
