let nextTodoId = 0

export const actions = {
  ADD_TODO: Symbol(),
  SET_VISIBILITY_FILTER: Symbol(),
  TOGGLE_TODO: Symbol()
};

export const addTodo = (text) => {
  return {
    type: actions.ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: actions.SET_VISIBILITY_FILTER,
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: actions.TOGGLE_TODO,
    id
  }
}
