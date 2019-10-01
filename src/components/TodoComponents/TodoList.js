import React from "react";
import Todo from "./Todo"



class TodoList extends React.Component {
  
  
    render(){ 
      return (

        <div>
        {this.props.todos.map(todo => <Todo todo={todo} handleCompleted={this.props.handleCompleted}/>)}
        </div>
      );
    }
}
  
  export default TodoList;