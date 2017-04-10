import React from 'react'
import { connect } from 'react-redux'

let ListItems = ({ todos }) => {
  let items = todos

  return (
    <ul>
      {
        items.map(x=> (
          <li key={x.id}>{x.text}</li>
          )
        ) 
      }
    </ul>
  )
}
ListItems = connect(state => state)(ListItems)

export default ListItems
