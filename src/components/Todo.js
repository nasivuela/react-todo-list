import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    const { todo, onRemoveTodo } = this.props;
    onRemoveTodo(todo.id);
  }

  render() {
    const { text } = this.props.todo;
    return (
      <div>
        <span>{text}</span>
        <Button onClick={this.handleRemove} text="borrar" />
      </div>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func.isRequired
};

export default Todo;
