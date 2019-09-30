import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={this.props.handleChange}
            value={this.props.formTodo}
            onSubmit={this.props.handleSubmit}
          />
          <button onSubmit={this.onSubmit}> Add Todo </button>
          <button> Clear Completed </button>
        </form>
      </div>
    );
  }
}
export default TodoForm;
