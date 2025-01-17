import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todoList = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todos: todoList,
      formTodo: ""
    };
  }

  handleChange = event => {
    this.setState({ formTodo: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { formTodo, todos } = this.state;
    const todo = {
      task: formTodo,
      completed: false,
      id: Date.now()
    };

    this.setState({
      todos: todos.concat(todo),
      formTodo: ""
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <div className="component">
          <TodoList todos={this.state.todos} />
          <TodoForm
            handleChange={this.handleChange}
            formTodo={this.state.formTodo}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default App;
