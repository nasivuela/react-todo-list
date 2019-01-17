import React, { Component } from 'react';
import uniqueId from 'lodash.uniqueid';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          text: 'Finish react example',
          id: uniqueId('todo_')
        }
      ],
      inputItem: ''
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleNewTodoChange = this.handleNewTodoChange.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }

  handleAddTodo(e) {
    e.preventDefault();
    const { inputItem } = this.state;
    const newTodo = {
      text: inputItem,
      id: uniqueId('todo_')
    };

    this.setState(prevState => ({
      todos: prevState.todos.concat(newTodo),
      inputItem: ''
    }));
  }

  handleNewTodoChange(e) {
    this.setState({
      inputItem: e.target.value
    });
  }

  handleRemoveTodo(id) {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todos => todos.id !== id)
    }));
  }

  render() {
    const { todos, inputItem } = this.state;
    console.log(todos);
    return (
      <div className='App'>
        <TodoList todos={todos} onRemoveTodo={this.handleRemoveTodo} />
        <AddTodo
          value={inputItem}
          onNewTodoChange={this.handleNewTodoChange}
          onAddTodo={this.handleAddTodo}
        />
      </div>
    );
  }
}

export default App;
