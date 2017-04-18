import camelCase from 'camel-case';
import { List, Record } from 'immutable';

const Todo = new Record({
  id: 0,
  index: 0,
  isComplete: false,
  label: 'todo',
});

const ACTIONS_MAP = {
  addTodo(state, { todo }) {
    return state.push(new Todo({ index: todo.id, ...todo }));
  },

  deleteTodo(state, { id }) {
    return state.filter(todo => todo.get('id') !== id);
  },

  editTodo(state, { id, label }) {
    return state.map(todo =>
      (todo.get('id') === id)
        ? todo.set('label', label)
        : todo
    );
  }
};

const initialState = new List();

export default function todos(state = initialState, { type, payload }) {
  const reducer = ACTIONS_MAP[camelCase(type)];

  return (reducer) ? reducer(state, payload) : state;
}
