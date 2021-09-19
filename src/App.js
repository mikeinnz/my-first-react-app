import React, { Component } from "react";
import Todos from "./components/Todos";
import Form from "./components/Form";

class App extends Component {
  state = {
    todos: [],
  };

  handleDelete = (index) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo, i) => i !== index),
    });
  };

  handleSort = () => {
    const { todos } = this.state;
    this.setState({
      todos: todos.sort((t1, t2) => (t1.task >= t2.task ? 1 : -1)),
    });
  };

  handleSubmit = (todo) => {
    this.setState({ todos: [...this.state.todos, todo] });
  };

  handleTick = (todo) => {
    const index = this.state.todos.indexOf(todo);
    const newtodos = [...this.state.todos];
    newtodos[index].status = !newtodos[index].status;

    this.setState({ todos: newtodos });
  };

  render() {
    return (
      <div className="container">
        <h1>Todo</h1>
        <p>Write what you have to do here</p>
        <Form handleSubmit={this.handleSubmit} />
        <h4>
          <button onClick={this.handleSort} className="btn btn-warning m-2">
            Sort
          </button>
          <span>Total tasks: {this.state.todos.length}</span>
          <span className="m-2">
            Incomplete tasks:{" "}
            {this.state.todos.filter((t) => t.status === false).length}
          </span>
        </h4>
        <Todos
          todoList={this.state.todos}
          handleDelete={this.handleDelete}
          handleTick={this.handleTick}
        />
      </div>
    );
  }
}

export default App;

/*
import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: [],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="container">
        <h1>React Tutorial</h1>
        <p>Add a character with a name and a job to the table.</p>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <h3>Add New</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
*/
