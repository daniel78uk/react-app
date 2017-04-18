import { List } from 'immutable'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css'
import actions from '../actions/todoActions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

class App extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    todos: PropTypes.instanceOf(List).isRequired
  }

  render() {
    const { actions, location, todos } = this.props
    const { addTodo, } = actions
    const filter = location.pathname.replace('/', '')

    return (
      <div className="App">
        <AddTodo addTodo={addTodo} />
        <TodoList actions={actions} filter={filter} todos={todos}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
