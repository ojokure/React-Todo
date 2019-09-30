import React from "react";

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
      todoForm: ""
    };
  }

  markTodo = (id) => () => {
    const { todos, todoForm } = this.state;
    this.setState({
      todos: todos.concat(),
      todoForm: todoForm => (e) => {

        e.target.value
      }
    });
  };


  render() {
    const {
      markTodo,
      state: { todos, todoForm }
    } = this;
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
        </div>
        <div className="component">
          {todos.map(todo => (
            <div key={todo.id}>
              <input onChange={markTodo}></input>
              <button onClick={markTodo(todo.id, this.handleChange)}> Add Todo </button>
              <button onClick={markTodo(todo.id, this.handleChange)}>
                Clear Completed
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
