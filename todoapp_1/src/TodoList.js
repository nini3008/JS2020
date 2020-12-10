import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm'
import './App.css';

class  App extends Component {

    state={
        todos: []
    }


    createTodo = (newTodo) =>{
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    removetask = (id) => {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        })
    }

    update  = (id, updatedTask) => {
        const updatedTodos = this.state.todos.map( todo => {
            if(todo.id === id){
                return {...todo, task:  updatedTask}
            }
            return todo
        });

        this.setState({
            todos: updatedTodos
        })
    }

  render() {
    const todos = this.state.todos.map(todo =>  {
        return <Todo
                key={todo.id}
                id={todo.id}
                task={todo.task}
                removeTodo={this.removetask}
                updateTodo={this.update}
                />;
    });

    return (
      <div>
        <h1>Todo List Practice</h1>
        <NewTodoForm  createTodo={this.createTodo}/>
        <ul>
            {todos}
        </ul>
      </div>
    );
  }
}

export default App;
