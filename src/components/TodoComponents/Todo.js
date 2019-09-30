import React from "react";




class TodoList extends React.Component {
  
  
    render() {
      return (
        <div>
     {this.props.todo.task}
        </div>
      );
    }}
  
  export default TodoList;