import React from 'react';




const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor(props){
  super(props);
  this.state = {
   todos : todoList,
  }
}


TodoList = (id, isComplete) => () => {
  const { todos } = this.state;
  this.setState({
    todos: todos.map(el => {
      if (el.id !== id) return el;
      return { id: el.id, name: el.name, complete: isComplete };
    })
  });
};



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
