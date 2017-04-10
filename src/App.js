import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './containers/AddTodo'
import ListItems from './containers/ListItems'


class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <ListItems />
      </div>
    );
  }
}

export default App;
