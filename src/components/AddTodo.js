import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { TextInput } from './TextInput'

export default class AddTodo extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    fetchAllTodos: PropTypes.func.isRequired
  }

  onSave = (label) => {
    if (!label.length) return

    this.props.addTodo(label)
  }

  render() {
    return (
      <header className="header">
        <TextInput
          className="new-todo"
          onSave={this.onSave}
          placeholder="add todo"
        />
      </header>
    )
  }
}
