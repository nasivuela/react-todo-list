import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Button from './Button';
import './Todo.css';

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
      <div className="Todo">
        <span>{text}</span>
        <Button 
          className="Todo__remove" 
          onClick={this.handleRemove}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func.isRequired
};

export default Todo;
