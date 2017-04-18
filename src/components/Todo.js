import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextInput } from './TextInput'

export default class Todo extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired
  }

  renderInput() {
    return (
      <TextInput
        value={this.props.label}
      />
    )
  }

  render() {
    const {label} = this.props

    return (
      <li >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
          />
          <label>
            {label}
          </label>
        </div>
        {this.renderInput()}
      </li>
    )
  }
}
