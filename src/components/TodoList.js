import { List } from 'immutable'
import React, { Component, PropTypes } from 'react'
import { Todo } from './Todo'

export default class TodoList extends Component {
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
    todos: PropTypes.instanceOf(List).isRequired,
  }

  renderListItems() {
    const { todos } = this.props

    return todos.toSeq()
      .sortBy(todo => todo.index)
      .map(this.renderTodo)
      .toArray()
  }

  renderTodo = (todo) => {
    const { deleteTodo, editTodo, markTodo, moveTodo } = this.props.actions;
    const todoObj = todo.toJS()

    return (
      <Todo
        key={`todo-${todo.id}`}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        markTodo={markTodo}
        moveTodo={moveTodo}
        {...todoObj}
      />
    )
  }

  render() {

    return (
      <section className="main">
        <ul className="todo-list">
          {this.renderListItems()}
        </ul>
      </section>
    )
  }
}
