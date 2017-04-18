import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ENTER_KEY_CODE = 13

export default class TextInput extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
  }

  state = {
    value: this.props.value || '',
  }

  onBlur = () => {
    this.props.onSave(this.state.value.trim())
    this.setState({
      value: '',
    })
  }

  onChange = (evt) => {
    this.setState({
      value: evt.target.value,
    })
  }

  onKeyDown = (evt) => {
    if (evt.keyCode !== ENTER_KEY_CODE) return
    this.onBlur()
  }

  render() {
    const { className, placeholder } = this.props
    const { value } = this.state

    return (
      <input
        autoFocus
        className={className}
        onBlur={this.onBlur}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        placeholder={placeholder}
        type="text"
        value={value}
      />
    )
  }
}
