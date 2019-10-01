import React from "react";

class TodoList extends React.Component {
  render() {
    return (
      <div
        style={
          this.props.todo.completed ? { textDecoration: "line-through" } : null
        }
        onClick={() => this.props.handleCompleted(this.props.todo.id)}
      >
        {this.props.todo.task}
      </div>
    );
  }
}

export default TodoList;
