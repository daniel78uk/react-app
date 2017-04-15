import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'

let ListItems = ({ todos, dispatch }) => {
  let items = todos

  return (
    <ul>
      {
        items.map(x=> (
          <li key={x.id}>{x.text} 
            <input
              name="completed"
              type="checkbox"
              checked={x.completed}
              onChange={()=>dispatch(toggleTodo(x.id))} 
            />
          </li>
          )
        ) 
      }
    </ul>
  )
}
ListItems = connect(state => state)(ListItems)

export default ListItems
