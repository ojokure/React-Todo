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
            onClick={this.props.handleSubmit}
          />
          <button type="submit" onClick={this.props.handleSubmit}>
            Add Todo
          </button>
          <button type="submit"> Clear Completed </button>
        </form>
      </div>
    );
  }
}
export default TodoForm;
